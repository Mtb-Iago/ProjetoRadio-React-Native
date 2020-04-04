import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,

    },
    header: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    img: {
        flex: 1,
        marginTop: 16,
        marginLeft: 'auto',
        marginRight: 'auto',

        borderRadius: 50,
        maxWidth: 350,
        height: 150,
        alignItems: 'center',




    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#41403D',
        marginBottom: 16,
        marginTop: 48,


    },
    incidentsProperty: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 24,
        textAlign: 'center'

    },
    incidentsValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#41403D',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,


    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    detailsButton: {
        marginTop: 16,
        flexDirection: 'row',
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    }

});