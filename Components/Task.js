import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


export default class Task extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.task}>
                <Text style={styles.taskText}>{this.props.val.date}</Text>
                <Text style={styles.taskText}>{this.props.val.task}</Text>
                <Text style={styles.taskText}>notes...</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.taskDelete}>
                    <Text style={styles.taskDeleteText}>Done</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    task: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    taskText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#778899'
    },
    taskDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00FF00',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    taskDeleteText: {
        color: 'white'
    }
});
