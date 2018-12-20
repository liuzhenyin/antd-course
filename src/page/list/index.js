import React from 'react';
import {Table} from 'antd';
import {connect} from 'dva';

class List extends React.Component {
    columns = [
        {
            title: '名称',
            dataIndex: 'name'
        }, {
            title: '描述',
            dataIndex: 'desc'
        }, {
            title: '链接',
            dataIndex: 'url'
        }
    ];

    render() {
        const {cardsList, cardsLoading} = this.props;
        return (
            <div>
                <Table
                    columns={this.columns}
                    dataIndex={cardsList}
                    loading={cardsLoading}
                    rowKey="id"/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {cardsList: state.cardsList, cardsLoading: state.loading.effects['cards/queryList']};
}

export default connect(mapStateToProps)(List);