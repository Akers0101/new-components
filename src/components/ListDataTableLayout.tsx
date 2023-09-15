// import React, { memo, useReducer, ReactNode } from "react";
// import {
//   Button,
//   ButtonProps,
//   Card,
//   Table,
//   PaginationProps,
//   Space,
//   TableColumnType,
//   TablePaginationConfig,
//   TableProps,
// } from "antd";

// import { useSelector } from "react-redux";
// import { useTranslation } from "react-i18next";
// import AppSettings from "../constant/AppSettings";
// import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
// enum Hierarchy {
//   SuperAdmin = 1,
//   House = 2,
//   MasterAgent = 3,
//   Agent = 4,
// }

// type CreateButtonType = ButtonProps & {
//   hierarchyId?: Hierarchy;
//   category?: string | string[];
//   actions?: string | string[];
// };

// export interface ListDateTableColumnOptions<RecordType>
//   extends TableColumnType<RecordType> {
//   visible?: boolean;
//   hierarchyId?: Hierarchy;
//   category?: string | string[];
//   actions?: string | string[];
// }

// type TableOptions = {
//   columns?: ListDateTableColumnOptions<any>[];
//   defaultPage?: number;
//   defaultPageSize?: number;
//   defaultSortBy?: string;
//   defaultSortDirection?: "asc" | "desc";
//   defaultPageSizeOptions?: number[];
// } & TableProps<any>;
// export interface ListDataTableLayoutOptions {
//   provider: {
//     useGetListMutation: UseQuery<any>;
//     params?: any;
//   };
//   // headerPageProps: LabelPageOptions;
//   actionRemark?: string | React.ReactNode;
//   createText?: ReactNode | string;
//   createButtonProps?: CreateButtonType;
//   advFilterProps?: any;
//   actionBeforeFilter?: any;
//   defaultFilter?: any;
//   //bulkActionProps?: DropdownBulkActionOptions;
//   //exportProps?: ExportStaticOptions;
//   //exportDynamicProps?: ExportDynamicOptions;
//   tableProps: TableOptions;
//   setData?: (data: any) => any;
//   setTotal?: (data: any) => any;
//   onCreate?: () => void;
//   onBeforeFilterSubmit?: (data: any) => any;
// }

// const ListDataTableLayout = ({
//   provider: { useGetListMutation: useQuery, params },
//   actionRemark,
//   createText,
//   createButtonProps,

//   actionBeforeFilter,
//   defaultFilter,
//   advFilterProps,
//   tableProps: {
//     columns,
//     defaultPage,
//     defaultPageSize,
//     defaultPageSizeOptions,
//     defaultSortBy,
//     defaultSortDirection,
//     ...tableProps
//   },
//   onCreate,
//   onBeforeFilterSubmit,
//   setData,
//   setTotal,
// }: ListDataTableLayoutOptions) => {
//   const { t } = useTranslation();
//   const { user } = useSelector(getUser);
//   const reducer = (state: any, action: any) => {
//     return { ...state };
//   };
//   const { appPaginate } = AppSettings;
//   const [state, setState] = useReducer(reducer, {
//     page: defaultPage ?? appPaginate.page,
//     pageSizeOptions: defaultPageSizeOptions ?? appPaginate.pageSizeOptions,
//     pageSize: defaultPageSize ?? appPaginate.pageSize,
//     sortBy: defaultSortBy ?? appPaginate.sortBy,
//     sortDirection: defaultSortDirection ?? appPaginate.sortDirection,
//     selectedRowKeys: [],
//     selectedRows: [],
//     visibleFilter: !!advFilterProps,
//     filters: defaultFilter,
//   });

//   const { data, isFetching, refetch } = useQuery({
//     ...extractFilter(state),
//     ...params,
//   });

//   const onRowSelected = (selectedRowKeys: React.Key[], selectedRows: any[]) => {
//     setState({ selectedRowKeys, selectedRows });
//   };

//   const onFilterToggle = () => {
//     setState((prev: any) => ({
//       ...prev,
//       visibleFilter: !prev.visibleFilter,
//     }));
//   };

//   const onFilterSubmit = (filters: any) => {
//     let newFilter = {
//       ...filters,
//       summaryType: state.summaryType,
//     };

//     if (onBeforeFilterSubmit) {
//       newFilter = onBeforeFilterSubmit(newFilter);
//     }

//     setState({
//       filters: newFilter,
//       page: defaultPage ?? appPaginate.page,
//       selectedRowKeys: [],
//       selectedRows: [],
//     });
//     setTimeout(() => void refetch(), 200);
//   };

//   const onFilterReset = () => {
//     setState({
//       filters: defaultFilter,
//       page: defaultPage ?? appPaginate.page,
//       selectedRowKeys: [],
//       selectedRows: [],
//     });
//   };

//   const onBulkActionSubmit = (key: any) => {
//     bulkActionProps?.onSubmit?.(key, state.selectedRows);
//   };

//   const onPaginationChange: PaginationProps["onChange"] = (page) => {
//     setState({ page, selectedRowKeys: [], selectedRows: [] });
//   };

//   const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
//     page,
//     pageSize
//   ) => {
//     setState({ page, pageSize, selectedRowKeys: [], selectedRows: [] });
//   };
//   const handleGetData = (response: any) =>
//     setData?.(response) || response?.data?.list;

//   const handleGetTotal = (response: any) =>
//     setTotal?.(response) || response?.data?.totalCount;
//   return (
//     <>
//       <Table
//         columns={adjustedColumns}
//         data={handleGetData(data)}
//         loading={isFetching || user.loading}
//         selectedRowKeys={state.selectedRowKeys}
//         onRowSelected={onRowSelected}
//         current={state.page}
//         pageSize={state.pageSize}
//         pageSizeOptions={state.pageSizeOptions}
//         total={handleGetTotal(data)}
//         onPaginationChange={onPaginationChange}
//         onShowSizeChange={onShowSizeChange}
//         // onSortChange={onSortChange}
//         scrollX={scrollX}
//         {...tableProps}
//       />
//     </>
//   );
// };

// ListDataTableLayout.defaultProps = {
//   defaultFilter: {},
//   tableProps: {
//     columns: [],
//   },
// };

// export default memo(ListDataTableLayout);
