import React, {useEffect, useRef, useState} from "react";
import {CampaignDto, SellerDto} from "../openapi";
import {Button, Form, Input, InputNumber, InputRef, Modal, notification, Select, Switch, Tag, Tooltip} from "antd";
import {campaignsApi} from "../api/exports";
import {PlusOutlined} from '@ant-design/icons';
import {layout} from "../seller/SellerModal";

export const CampaignModal: React.FC<{ showModal: boolean, closeModal: (download: boolean) => void, seller: SellerDto, campaignId: number }> =
    ({showModal, closeModal, seller, campaignId}) => {
        const [campaignFundOld, setCampaignFundOld] = useState<number>(0);
        const [inputVisible, setInputVisible] = useState(false);
        const [inputValue, setInputValue] = useState('');
        const [editInputIndex, setEditInputIndex] = useState(-1);
        const [editInputValue, setEditInputValue] = useState('');
        const inputRef = useRef<InputRef>(null);
        const editInputRef = useRef<InputRef>(null);
        const [campaign, setCampaign] = useState<CampaignDto>({
            name: "",
            keywords: [],
            bidAmount: 1,
            fund: 1,
            status: true,
            town: "",
            radius: 0,
            sellerId: seller.id
        } as CampaignDto);

        const isCampaignEditable: boolean = campaignId > 0;

        const towns: string[] = ["Białystok", "Bydgoszcz", "Gdańsk", "Gorzów Wielkopolski", "Katowice", "Kielce", "Kraków",
            "Lublin", "Łódź", "Olsztyn", "Opole", "Poznań", "Rzeszów", "Szczecin", "Toruń", "Warszawa", "Wrocław", "Zielona Góra"];

        const onFinish = async () => {
            if(isCampaignEditable) {
                campaignsApi.update(campaign)
                    .then(() => closeModal(true))
                    .catch(() => notification.error({message: "Campaign Edit Error."}));
            } else {
                await campaignsApi.create1(campaign, seller.id!)
                    .then(() => closeModal(true))
                    .catch(() => notification.error({message: "Creating Campaign Error."}));
            }

        };

        const downloadCampaign = async () => {
            await campaignsApi.findOne(seller.id!, campaignId)
                .then((response) => {
                    setCampaign(response.data)
                    setCampaignFundOld(response.data.fund!)
                })
                .catch(() => notification.error({message: "Creating Download Error."}));
        };

        const handleClose = (removedTag: string) => {
            const newTags = campaign.keywords?.filter(tag => tag !== removedTag);
            setCampaign({...campaign, keywords: newTags})
        };

        const showInput = () => {
            setInputVisible(true);
        };

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
        };

        const handleInputConfirm = () => {
            if (inputValue && campaign.keywords?.indexOf(inputValue) === -1) {
                setCampaign({...campaign, keywords: [...campaign.keywords, inputValue]})
            }
            setInputVisible(false);
            setInputValue('');
        };

        const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setEditInputValue(e.target.value);
        };

        const handleEditInputConfirm = () => {
            const newTags = [...campaign.keywords!];
            newTags[editInputIndex] = editInputValue;
            setCampaign({...campaign, keywords: newTags})
            setEditInputIndex(-1);
            setInputValue('');
        };

        useEffect(() => {
            if (inputVisible) {
                inputRef.current?.focus();
            }
        }, [inputVisible]);

        useEffect(() => {
            editInputRef.current?.focus();
        }, [inputValue]);

        useEffect(() => {
            if(isCampaignEditable) {
                downloadCampaign()
            }
        }, [isCampaignEditable]);

        return (
            <Modal
                visible={showModal}
                destroyOnClose
                title={(isCampaignEditable ? "Edit" : "Add New") + " Campaign"}
                footer={false}
                onCancel={() => closeModal(false)}
            >
                <Form {...layout} name="nest-messages" onFinish={onFinish}>
                    <Form.Item label="Name">
                        <Input value={campaign.name}
                               onChange={v => setCampaign({...campaign, name: v.target.value, keywords: v.target.value.split(" ")})}/>
                    </Form.Item>
                    <Form.Item label="Keywords">
                        {campaign.keywords?.map((tag, index) => {
                            if (editInputIndex === index) {
                                return (
                                    <Input
                                        ref={editInputRef}
                                        key={tag}
                                        size="small"
                                        className="tag-input"
                                        value={editInputValue}
                                        onChange={handleEditInputChange}
                                        onBlur={handleEditInputConfirm}
                                        onPressEnter={handleEditInputConfirm}
                                    />
                                );
                            }

                            const isLongTag = tag.length > 20;

                            const tagElem = (
                                <Tag
                                    className="edit-tag"
                                    key={tag}
                                    closable={index !== 0}
                                    onClose={() => handleClose(tag)}
                                >
                            <span
                                onDoubleClick={e => {
                                    if (index !== 0) {
                                        setEditInputIndex(index);
                                        setEditInputValue(tag);
                                        e.preventDefault();
                                    }
                                }}
                            >
                              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                            </span>
                                </Tag>
                            );
                            return isLongTag ? (
                                <Tooltip title={tag} key={tag}>
                                    {tagElem}
                                </Tooltip>
                            ) : (
                                tagElem
                            );
                        })}
                        {inputVisible && (
                            <Input
                                ref={inputRef}
                                type="text"
                                size="small"
                                className="tag-input"
                                value={inputValue}
                                onChange={handleInputChange}
                                onBlur={handleInputConfirm}
                                onPressEnter={handleInputConfirm}
                            />
                        )}
                        {!inputVisible && (
                            <Tag className="site-tag-plus" onClick={showInput}>
                                <PlusOutlined/> New Keyword
                            </Tag>
                        )}
                    </Form.Item>
                    <Form.Item label="Bid Amount (PLN)">
                        <InputNumber
                            value={campaign.bidAmount}
                            onChange={v => setCampaign({...campaign, bidAmount: v || 1})}
                            style={{width: "100%"}}
                            min={1} max={campaign.fund} step={1}/>
                    </Form.Item>
                    <Form.Item label="Fund (PLN)">
                        <InputNumber
                            value={campaign.fund}
                            onChange={v => setCampaign({...campaign, fund: v || 1, bidAmount: v < campaign.bidAmount! || !v ? v || 1 : campaign.bidAmount!})}
                            style={{width: "100%"}}
                            min={1} max={isCampaignEditable ? (campaignFundOld + seller.fund!) : seller.fund} step={1}/>
                    </Form.Item>
                    <Form.Item label="Status">
                        <Switch defaultChecked={campaign.status} onChange={v => setCampaign({...campaign, status: v})}/>
                    </Form.Item>
                    <Form.Item label="Town">
                        <Select
                            showSearch
                            value={campaign.town}
                            placeholder="Select A Town"
                            onChange={town => setCampaign({...campaign, town: town})}
                        >
                            {towns.map(town => <Select.Option key={town} value={town}>{town}</Select.Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Radius (km)">
                        <InputNumber
                            value={campaign.radius}
                            onChange={v => setCampaign({...campaign, radius: v || 0})}
                            style={{width: "100%"}}
                            min={0} max={50000} step={1} precision={0}/>
                    </Form.Item>
                    <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                        <Button type="primary" onClick={onFinish} disabled={campaign.name!.length === 0 || campaign.town!.length === 0}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
