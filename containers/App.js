import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Button from '../components/Button'
import ConfirmModal from '../components/ConfirmModal'
import {showConfModal, hideConfModal} from '../action/index'

class App extends Component{
    constructor(props){
        super(props);
		this.state = {
			confVisible : false
		}
    }
	
	//点击确定按钮callback
	onOk() {
		console.log('success');
	}
	
	//点击取消按钮callback
	onCancel() {
		console.log('fail');
	}
	
	//显示confirm
	onShowConfirmModal() {
		let newstate = { visible : true }
		this.props.dispatch(showConfModal(newstate));
	}
	
	//隐藏confirm
    hideConfirmModal() {
		this.props.dispatch(hideConfModal());
    }
	
    render(){
		let esConfirm = null;
		
		if(this.props.visible){
			esConfirm = (
				<ConfirmModal confVisible={this.props.visible} closable={true} buttonble={true} cancelble={true} hideConfirmModal={this.hideConfirmModal.bind(this)}
                                title="标题"
                                okText="create"
                                cancelText="cancel"
                                onOk={this.onOk.bind(this)} 
                                onCancel={this.onCancel.bind(this)} content="内容" />
			);
		}
	
        return (
            <div>
				<Button text="ConfirmModal" onClick={this.onShowConfirmModal.bind(this)} />
				<ReactCSSTransitionGroup transitionName="eventModal" >
					{esConfirm}
				</ReactCSSTransitionGroup>
            </div>
        );
    }
}

function select(state) {
  return {
    visible: state.visible
  };
}

export default connect(select)(App);