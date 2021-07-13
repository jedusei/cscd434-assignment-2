import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            <View style={{ padding: 30, paddingBottom: 0 }}>
                <View style={{ backgroundColor: "#fff", elevation: 4, borderRadius: 30, padding: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Feather name="menu" size={24} color="#585e86" />
                        <Ionicons name="ellipsis-vertical" size={24} color="#585e86" />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg" }} style={styles.profilePicture} resizeMode="contain" />
                        <Text style={{ color: '#575b8d', fontSize: 30, fontWeight: 'bold', marginTop: 15, marginBottom: 5 }}>Hira Riaz</Text>
                        <Text style={{ fontSize: 15 }}>UX/UI Designer</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40, marginBottom: 20 }}>
                        <View style={styles.statContainer}>
                            <Text style={styles.statValue}>$8900</Text>
                            <Text style={styles.statLabel}>Income</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.statContainer}>
                            <Text style={styles.statValue}>$5500</Text>
                            <Text style={styles.statLabel}>Expenses</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.statContainer}>
                            <Text style={styles.statValue}>$890</Text>
                            <Text style={styles.statLabel}>Loan</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <Text style={{ color: '#3f4679', fontSize: 30, fontWeight: 'bold', transform: [{ translateY: -3 }] }}>Overview</Text>
                    <Ionicons name="notifications-outline" size={24} color="black" style={{ marginLeft: 10, flex: 1 }} />
                    <Text style={{ color: '#3f4679', fontSize: 17 }}>Sept 13, 2020</Text>
                </View>
                <View style={styles.transaction}>
                    <View style={styles.transactionIcon}>
                        <Ionicons name="arrow-up" size={24} color="black" />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.transactionTitle}>Sent</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.transactionDescription}>Sending Payment to Clients</Text>
                            <Text style={styles.transactionCost}>$150</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.transaction}>
                    <View style={styles.transactionIcon}>
                        <Ionicons name="arrow-down" size={24} color="black" />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.transactionTitle}>Received</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.transactionDescription}>Receiving Salary from company</Text>
                            <Text style={styles.transactionCost}>$150</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.transaction}>
                    <View style={styles.transactionIcon}>
                        <FontAwesome name="dollar" size={20} color="black" />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.transactionTitle}>Loan</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.transactionDescription}>Loan for the car</Text>
                            <Text style={styles.transactionCost}>$150</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15 }}>
                    <Ionicons name="home-outline" size={30} color="black" />
                    <Ionicons name="card-outline" size={30} color="black" />
                    <TouchableOpacity activeOpacity={0.75}>
                        <View style={{ backgroundColor: "#3d4484", padding: 15, paddingVertical: 10, borderRadius: 15 }}>
                            <Entypo name="plus" size={24} color="#fff" />
                        </View>
                    </TouchableOpacity>
                    <FontAwesome name="dollar" size={25} color="black" />
                    <MaterialCommunityIcons name="account-circle-outline" size={30} color="black" />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profilePicture: {
        width: 120,
        height: 120,
        borderRadius: 60
    },
    statContainer: {
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    statLabel: {
        color: '#000',
        marginTop: 10
    },
    statValue: {
        color: '#595b7d',
        fontSize: 20
    },
    separator: {
        backgroundColor: '#e2e2e2',
        width: 1
    },
    transaction: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        elevation: 4,
        borderRadius: 20,
        marginBottom: 20,
    },
    transactionIcon: {
        backgroundColor: "#e6e8f7",
        borderRadius: 15,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    },
    transactionTitle: {
        fontWeight: 'bold',
        fontSize: 17
    },
    transactionCost: {
        fontWeight: 'bold'
    },
    transactionDescription: {
        color: "#8f8f8f",
        fontSize: 13
    }
});
