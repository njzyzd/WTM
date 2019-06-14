﻿import { columnsRender, columnsRenderImg, DataViewTable } from 'components/dataView';
import { DesError } from 'components/decorators';
import React from 'react';
import Store from '../store';
import Action from './action';
/**
 * 列 信息配置
 * 完整参数列表 https://ant.design/components/table-cn/#components-table-demo-dynamic-settings
 * dataIndex:属性名称 区分大小写
 * title:表格显示的中文标题
 */
const columns = [

    {
        dataIndex: "LogType",
        title: "类型",
        render: columnsRender,
        width:80
    },
   {
        dataIndex: "ModuleName",
        title: "模块",
       render: columnsRender,
       width: 120
    },

    {
        dataIndex: "ActionName",
        title: "动作",
        render: columnsRender,
        width: 120
    },

    {
        dataIndex: "ITCode",
        title: "ITCode",
        render: columnsRender,
        width: 120
    },

    {
        dataIndex: "ActionUrl",
        title: "Url",
        render: columnsRender,
        width: 200
    },

    {
        dataIndex: "ActionTime",
        title: "操作时间",
        render: columnsRender,
        width: 200
    },

    {
        dataIndex: "Duration",
        title: "时长",
        render: columnsRender,
        width: 100
    },
    

    {
        dataIndex: "IP",
        title: "IP",
        render: columnsRender,
        width: 120
    },
    {
        dataIndex: "Remark",
        title: "备注",
        render: columnsRender 
    }
]

/**
 * 表格
 */
@DesError
export default class extends React.Component<any, any> {
    /**
     * 操作动作
     */
    renderColumns() {
        const tableColumns: any[] = [...columns];
        // 根据需求 加入行动作
        if (true) {
            tableColumns.push(
                {
                    title: '动作',
                    dataIndex: 'Action',
                    fixed: 'right',//固定 列
                    width: 150,
                    render: (text, record) => <Action.rowAction data={record} />
                }
            )
        }
        return tableColumns
    }
    render() {
        return <DataViewTable Store={Store} columns={this.renderColumns()} />
    }
}
