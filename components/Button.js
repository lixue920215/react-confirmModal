import './style/react.css'
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

/*
 * @Component Button 
 * @param {string} type     类型 默认'button' || submit
 * @param {string} size     大小 参数 large  middle small tiny mini
 * @param {string} text     显示文字 默认'default'
 * @param {string} color    默认default 如:orange blue green red gray fluid(宽度100%)  ok(确认按钮) cancel(取消铵钮)
 * @param {string} fluid    宽度100%
 * @param {string} classVal 新增加的class值    
 */
class Button extends Component{
    constructor (props) {
        super(props);

        this.state = {
            type     : this.props.type ? this.props.type : 'button',
            size     : this.props.size ? this.props.size : '',
            color    : this.props.color ? this.props.color : 'default',
            fluid    : this.props.fluid ? this.props.fluid : '',
            classVal : this.props.className || '',
            text     : this.props.text || 'default'
        }

    }

    handleClick() {
        if (this.props.onClick) {
            this.props.onClick()
        }
    }

    componentWillReceiveProps (nextProps) {
        if ( nextProps.text != this.state.text ) {

            this.setState({
                text : nextProps.text
            });
        }
    }

    render() {
        // css 组合
        var btnClass = classNames({
            'button' : true,
            [`btn-${this.state.size}`] : this.state.size.length > 0,
            [`btn-${this.state.color}`] : true,
            [`btn-${this.state.fluid}`] : this.state.fluid.length > 0,
            [`${this.state.classVal}`] : this.state.classVal.length > 0
        });

        return (
            <button type={this.state.type} className={btnClass} onClick={this.handleClick.bind(this)}>
                {this.state.text || this.props.children}
            </button>
        );
    }
}

Button.propTypes = {
    type    : PropTypes.string,
    size    : PropTypes.string,
    classVal: PropTypes.string,
    color   : PropTypes.string,
    text    : PropTypes.string
}

export default Button

