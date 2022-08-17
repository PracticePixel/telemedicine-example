import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native'
import SanarRTC, { SanarTelemedicine } from "react-native-sanar-telemedicine-rc";
import MyStack from './router';
import { theme } from './components/Common';

const userDetails = { did: "abcdefg", first_name: "Abdul", last_name: "Aziz", dob: "1994-08-13", gender: "M", nationality: "Saudi Arabia", mid: "786756", phone_code: "91", phone_no: "1234689", maritalStatus: "0", contract_no: "334488", document_id: "1039126857", document_type: 1, lang: "en" };

const RootScreen = () => {
    const [connect, setConnect] = useState(false);
    const [enableView, setEnableView] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setEnableView(true)
        }, 2000);
        SanarTelemedicine.Connect("client_id", userDetails)
            .then(response => {
                console.log(response)
                setConnect(response);
            }).catch(e => console.log(e));
    }, [connect])

    const goToStack = () => {
        return (<MyStack />)
    }

    return (
        <React.Fragment>
            {enableView ? <MyStack /> :
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: theme.fontFamily.medium, fontSize: theme.fonts.font18 }}>Sanar-Medgulf</Text>
                    <Text style={{ fontFamily: theme.fontFamily.regular, fontSize: theme.fonts.font12, color: 'gray', marginTop: 5 }}>Telemedicine SDK</Text>
                </View>
            }
            <SanarRTC enable={connect} />
        </React.Fragment>
    );
}

export default RootScreen;