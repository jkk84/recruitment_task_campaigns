import React, {useEffect, useState} from "react";
import {CampaignDto, SellerDto} from "../openapi";
import {campaignsApi, sellersApi} from "../api/exports";
import {Button, Card, Table} from "antd";
import {useHistory, useParams} from "react-router-dom";
import {CampaignModal} from "../campaign/CampaignModal";

export const Seller: React.FC<{}> = () => {
    const [seller, setSeller] = useState<SellerDto>();
    const [campaigns, setCampaigns] = useState<CampaignDto[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [campaignId, setCampaignId] = useState<number>(0);
    const history = useHistory();

    // @ts-ignore
    const {id} = useParams()

    const downloadAll = async () => {
        const responseSeller = await sellersApi.findOne1(id);
        setSeller(responseSeller.data)
        const responseCampaigns = await campaignsApi.findAllBySellerId(id);
        setCampaigns(responseCampaigns.data)
    }

    const deleteCampaign = async (id: number) => {
        campaignsApi._delete(id)
            .then(() => downloadAll())
    }

    useEffect(() => {
        if(id) {
            downloadAll();
        }
    }, [id]);

    return (
        <div>
            {showModal && seller && <CampaignModal
                showModal={showModal}
                seller={seller}
                campaignId={campaignId}
                closeModal={(download: boolean) => {
                    setShowModal(false);
                    setCampaignId(0);
                    if(download) {
                        downloadAll();
                    }
                }}/>}
            <div style={{margin: "5vw"}}>
                <Button type={"primary"} style={{marginBottom: "1vw"}} onClick={() => history.push("/")}>
                    Back To Seller List
                </Button>
                <Card
                    style={{ marginBottom: "1rem", width: "400px" }}
                    type="inner"
                    title={"Funds: " + seller?.fund + " PLN"}
                >
                    <div>{seller?.login}</div>
                    <div>{seller?.firstName + " " + seller?.lastName}</div>
                    <div>{seller?.email}</div>
                </Card>
                <Button type={"primary"} style={{marginBottom: "1vw"}} onClick={() => setShowModal(true)} disabled={seller?.fund! <= 0}>
                    Add New Campaign
                </Button>
                <Table size={"small"}
                       onRow={(record) => {
                           return {
                               onClick: () => {
                                   setShowModal(true)
                                   setCampaignId(record.id!)
                               }
                           }
                       }}
                       rowClassName={"table-row-custom"}
                       title={() => "Campaigns"}
                       bordered
                       dataSource={campaigns}
                       columns={[
                           {
                               title: 'Id',
                               dataIndex: 'id',
                               key: 'id',
                           },
                           {
                               title: 'Name',
                               dataIndex: 'name',
                               key: 'name',
                           },
                           {
                               title: 'Keywords',
                               key: 'keywords',
                               render: (row) => row.keywords.join(", ")
                           },
                           {
                               title: 'Bid Amount (PLN)',
                               dataIndex: 'bidAmount',
                               key: 'bidAmount',
                           },
                           {
                               title: 'Fund (PLN)',
                               dataIndex: 'fund',
                               key: 'fund',
                           },
                           {
                               title: 'Status',
                               key: 'status',
                               render: (row) => row.status ? "On" : "Off"
                           },
                           {
                               title: 'Town',
                               dataIndex: 'town',
                               key: 'town',
                           },
                           {
                               title: 'Radius (km)',
                               dataIndex: 'radius',
                               key: 'radius',
                           },
                           {
                               title: 'Delete',
                               key: 'radius',
                               render: (row) => <Button type={"primary"} onClick={(event) => {
                                   event.preventDefault();
                                   event.stopPropagation();
                                   deleteCampaign(row.id);
                               }}>Delete</Button>
                           },
                       ]}
                       pagination={false}
                />
            </div>
        </div>
    )
}