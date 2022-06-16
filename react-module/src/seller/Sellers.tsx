import React, {useEffect, useState} from "react";
import {SellerDto} from "../openapi";
import {sellersApi} from "../api/exports";
import {Button, Table} from "antd";
import {SellerModal} from "./SellerModal";
import {useHistory} from "react-router-dom";

export const Sellers: React.FC<{}> = () => {
    const [sellers, setSellers] = useState<SellerDto[]>([]);
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();

    const downloadSellers = async () => {
        const response = await sellersApi.findAll();
        setSellers(response.data)
    }

    useEffect(() => {
        downloadSellers();
    }, []);

    return (
        <div>
            {showModal && <SellerModal
                showModal={showModal}
                closeModal={(download: boolean) => {
                    setShowModal(false);
                    if (download) {
                        downloadSellers();
                    }
                }}/>}
            <div style={{margin: "5vw"}}>
                <Button type={"primary"} style={{marginBottom: "1vw"}} onClick={() => setShowModal(true)}>
                    Add New Seller
                </Button>
                <Table size={"small"}
                       onRow={(record) => {
                           return {
                               onClick: () => history.push("/seller/" + record.id + "/campaigns")
                           }
                       }}
                       rowClassName={"table-row-custom"}
                       title={() => "Sellers"}
                       bordered
                       dataSource={sellers}
                       columns={[
                           {
                               title: 'Id',
                               dataIndex: 'id',
                               key: 'id',
                           },
                           {
                               title: 'Login',
                               dataIndex: 'login',
                               key: 'login',
                           },
                           {
                               title: 'Email',
                               dataIndex: 'email',
                               key: 'email',
                           },
                           {
                               title: 'First Name',
                               dataIndex: 'firstName',
                               key: 'firstName',
                           },
                           {
                               title: 'Last Name',
                               dataIndex: 'lastName',
                               key: 'lastName',
                           },
                           {
                               title: 'Funds (PLN)',
                               dataIndex: 'fund',
                               key: 'fund',
                           },
                       ]}
                       pagination={false}
                />
            </div>
        </div>
    )
}