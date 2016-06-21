import './style/react.css'
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import Button from '../components/Button'

/*
 * @Component ConfirmModal
 * @param {bool} confVisible  弹窗是否显示 true/false
 * @param {bool} buttonble    确认取消按钮显示隐藏 true/false
 * @param {bool} cancelble  取消铵钮是否显示 true/false
 * @param {func} onOk  确认按钮的回调函数
 * @param {func} onCancel  取消按钮的回调函数
 * @param {string} title  弹窗的标题
 * @param {string} content  弹窗的内容
 */

class ConfirmModal extends Component{
    constructor(props) {
        super(props);
        this.handleCloseBtnClick = this.handleCloseBtnClick.bind(this);
        this.handleOverlayClick  = this.handleOverlayClick.bind(this);
    }

    onOk() {
        if(this.props.onOk){
            this.props.onOk();
        }
        this.props.hideConfirmModal();
    }

    onCancel() {
        if(this.props.onCancel){
            this.props.onCancel();
        }
        this.props.hideConfirmModal();
    }

    handleCloseBtnClick(e) {
        e.preventDefault();
		e.stopPropagation();
		this.props.hideConfirmModal();
    }

    handleOverlayClick(e) {
        if (e.target === this.refs.confModal) {
            e.preventDefault();
            e.stopPropagation();
			this.props.hideConfirmModal();
		}

    }

	render() {
        return (
            <div>
                <div className= 'confirmModal-mask'></div>
                <div className= 'confirmModal-wrap' ref= "confModal" onClick= {this.handleOverlayClick} >
					<div className = 'confirmModal'>
						<div className = 'confirmModal-content' >
							{this.props.closable && (<button className= 'confirmModal-close'><span className ='confirmModal-close-x' onClick= {this.handleCloseBtnClick}>&times;</span></button>) }
							<div className= 'confirmModal-header'>
								<div className= 'confirmModal-title'>{this.props.title}</div>
							</div>
							<div className= 'confirmModal-body'>
								<div>{this.props.content}</div>
							</div>
							{this.props.buttonble && (
								<div className= 'confirmModal-footer'>
									{this.props.cancelble && <Button  color='cancel' text= {this.props.cancelText || '取销'}  onClick= {this.onCancel.bind(this)}/>}
									<Button color='blue' text= {this.props.okText || '确定'} onClick= {this.onOk.bind(this)}/>
								</div>
							)}

						</div>
					</div>
                </div>
          </div>
        );
	}
}
ConfirmModal.propTypes = {
    title     : PropTypes.string,
    visible   : PropTypes.bool,
    closable  : PropTypes.bool,
    buttonble : PropTypes.bool,
}
export default ConfirmModal

