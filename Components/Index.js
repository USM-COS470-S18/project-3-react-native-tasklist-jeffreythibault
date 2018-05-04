import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Modal
} from 'react-native';

import Task from './Task';

export default class Index extends Component {

    constructor(props){
        super(props);
        this.state = {
            taskArray: [],
            askText: '',
        };
    }
    render() {
        let tasks = this.state.taskArray.map((val, key)=>{
            return <Task key={key} keyval={key} val={val}
                    deleteMethod={()=>this.deleteTask(key)}/>
        });
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Task List </Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {tasks}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Add task name here to begin'
                        onChangeText={(taskText)=> this.setState({taskText})}
                        value={this.state.taskText}
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
                <TouchableOpacity onPress={ this.addTask.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }

    addTask(){
        if(this.state.taskText){
            var d = new Date();
            this.state.taskArray.push({
                'date':(d.getMonth()+1) +
                "/"+ d.getDate()+"/"+d.getFullYear(),
                'task': this.state.taskText
            });
            this.setState({ taskArray: this.state.taskArray });
            this.setState({taskText:''});
        }
    }

    deleteTask(key){
        this.state.taskArray.splice(key, 1);
        this.setState({taskArray: this.state.taskArray});
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#6495ED',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#DC143C',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});
