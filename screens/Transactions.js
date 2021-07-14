import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, Feather, Octicons } from '@expo/vector-icons';
import img_people from '../assets/people.png';

const filters = ["All", "Income", "Expense"];

export default function Transactions() {
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

    return (
        <ScrollView style={styles.container}>
            <View style={{ padding: 30 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <AntDesign name="left" size={24} color="black" />
                    <Feather name="search" size={24} color="black" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20 }}>
                    <Text style={{ color: '#3f4679', fontSize: 25, fontWeight: 'bold', transform: [{ translateY: -3 }] }}>Recent Transactions</Text>
                    <Text style={{ color: '#000', fontSize: 16 }}>See all</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                    {filters.map((filter, i) => {
                        const isSelected = (i == selectedFilterIndex);
                        return (
                            <TouchableOpacity key={filter} activeOpacity={0.75} onPress={() => setSelectedFilterIndex(i)}>
                                <View style={Object.assign({}, styles.chip, isSelected && styles.selectedChip)}>
                                    <Text style={isSelected ? styles.selectedChipText : styles.chipText}>{filter}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <Text style={{ color: '#3f4679', fontSize: 23, fontWeight: 'bold', marginVertical: 20 }}>Today</Text>
                <View style={styles.transaction}>
                    <View style={styles.transactionIcon}>
                        <Octicons name="mail-read" size={40} color="#404770" />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.transactionTitle}>Payment</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.transactionDescription}>Payment from Andrea</Text>
                            <Text style={styles.transactionCost}>$30.00</Text>
                        </View>
                    </View>
                </View>
                <Image source={img_people} resizeMode="contain" style={{ width: "100%", marginBottom: 30 }} />
                <TouchableOpacity activeOpacity={0.75}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>See Details</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    chip: {
        backgroundColor: "#fefefe",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30,
        marginRight: 10,
        elevation: 4
    },
    chipText: {
        color: '#000'
    },
    selectedChip: {
        backgroundColor: "#575e94"
    },
    selectedChipText: {
        color: "#fff"
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
        color: '#5d5e82',
        fontWeight: 'bold'
    },
    transactionDescription: {
        color: "#8f8f8f",
        fontSize: 13
    },
    btn: {
        backgroundColor: '#3d4886',
        paddingVertical: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
