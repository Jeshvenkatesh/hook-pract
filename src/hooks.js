import React from 'react';
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css';
import Axios from "axios";
  

class DataTable extends React.Component{

    state={
        getAlldata:[],

    }
    componentDidMount(){
        Axios.get("http://35.204.23.194:5000/api/clients/getAllClients")
            .then((response) => {
                console.log(response.data.clients)
                this.setState({ getAlldata: [...response.data.clients] })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render(){

       const iterateAllClients = this.state.getAlldata === null ? [] : this.state.getAlldata.map((item, pos) => {
            return (
                {
                    name: item.client_name,
                    Address: item.address,
                    Email: item.email,
                    Phone: item.phone,
                    Action: <button>Delete</button>
                     
                }
            )
        })

        const data = [...iterateAllClients]
         
          const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
          }, {
            Header: 'Address',
            accessor: 'Address',
          },
          {
            Header: 'Email',
            accessor: 'Email',
          },
          {
            Header: 'Phone',
            accessor: 'Phone',
          },
          {
            Header: 'Action',
            accessor: 'Action',
          }
        ]
        return(
            <div>
                    <ReactTable data={data} columns={columns}  />
               
            </div>
        )
    }
}

export default DataTable;


const iterateAllClients = this.state.responseAllClients === null ? [] : this.state.responseAllClients.map((item, pos) => {
    return (
        {
            name: item.client_name,
            Address: item.address,
            Email: item.email,
            Phone: item.phone,
            Action: <div >
             <i onClick={() => {
                 this.handleEditClientPopUp(pos);
                 this.handleEditData(pos)
             }}
                 className="fa fa-edit" aria-hidden="true"></i>
             <i onClick={() => this.handleDeleteClient(pos)} className="fa fa-trash" aria-hidden="true"></i>
             </div>
             
        }
    )
})

const data = [...iterateAllClients]
 
  const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Address',
    accessor: 'Address',
  },
  {
    Header: 'Email',
    accessor: 'Email',
  },
  {
    Header: 'Phone',
    accessor: 'Phone',
  },
  {
    Header: 'Action',
    accessor: 'Action',
  }
]

return (
    <div className={classes.botsalgo_mainSection}>
        <h2 >CLIENT</h2>
        <div className={classes.botsalgo_searchSection}>
            <div className={classes.botsalgo_searchbar}>
                <div>
                    <input type="text" />
                    <button>Search</button>
                    <button className={classes.client_btn} onClick={this.handleAddClientPopUp}>Add Client</button>
                </div>
            </div>
        </div>
        <br />
        <br />
                <div className={classes.ClentDetailsSection} >
                <ReactTable data={data} columns={columns}  />



                // getAllExchangesData = this.state.allExchanges === null ? [] : this.state.allExchanges.map((item, pos) => {
    //     return (
    //         {
    //             name: item.client_id,
    //             exeUname: item.exchange_unique_name,
    //             volume: item.total_volume,
    //             hours: item.total_hours,
    //             status: item.is_scheduler_running === "Y" ? <p style={{ color: "green" }}> Active</p> : <p style={{ color: "red" }}>Inactive</p>,
    //             Action: <div className={classes.actionIcons}>
    //                 <div>
    //                     <button>View</button>
    //                     <button onClick={() => {
    //                         this.handleEditExchangePopUp();
    //                         this.handleEditExchangeData(pos)
    //                     }}>Edit</button>
    //                     <button onClick={() => this.handleDeleteExchange(pos)}>Delete</button>
    //                 </div>
    //                 <div>
    //                     <button onClick={() => {
    //                         this.handleUpdateVolPopUp();
    //                         this.handleUpdateVolume(pos)
    //                     }}>Update Volume</button>
    //                 </div>
    //             </div>
    //         }
    //     )
    // })
    // customStyles = {
    //     header: {
    //         style: {
    //             display: 'none',
    //         },
    //     },
    //     rows: {
    //         style: {
    //             minHeight: '72px', // override the row height
    //             color: 'black',
    //             background: 'lightsteelblue'
    //         }
    //     },
    //     headCells: {
    //         style: {
    //             paddingLeft: '8px', // override the cell padding for head cells
    //             paddingRight: '8px',
    //             fontSize: '18px',
    //             color: 'black',
    //             // background: '#004289'
    //             background: 'lightyellow',
    //             center: true,
    //         },
    //     },
    //     cells: {
    //         style: {
    //             paddingLeft: '8px', // override the cell padding for data cells
    //             paddingRight: '8px',
    //             fontSize: "14px",
    //             center: true,
    //         },
    //     },
    //     title: {
    //         style: {
    //             color: 'blue',
    //         }
    //     }
    // };
    
    // data = [...this.getAllExchangesData]
    // columns = [
    //     {
    //         name: "Client Name", //  column th
    //         selector: "name", // td
    //         sortable: true,
    //         center: true,
    //     },
    //     {
    //         name: "Exe Unique Name",
    //         selector: "exeUname",
    //         sortable: true,
    //         center: true,
    //     },
    //     {
    //         name: "Volume",
    //         selector: "volume",
    //         sortable: true,
    //         right: true,
    //         center: true,
    //     },
    //     {
    //         name: "Hours",
    //         selector: "hours",
    //         sortable: true,
    //         center: true,
    //     },
    //     {
    //         name: "Status",
    //         selector: "status",
    //         sortable: true,
    //         color: "green",
    //         center: true,
    //     },
    //     {
    //         name: "Action",
    //         selector: "Action",
    //         sortable: true,
    //         center: true,
    //     }
    // ];
    //  <div className={classes.tableWrapper}>
    //                     <DataTable columns={this.columns} data={this.data} highlightOnHover={true} pointerOnHover={true}
    //                     theme="solarized"  striped={true}  customStyles={this.customStyles} pagination={true} responsive={true} onRowDoubleClicked={this.handleRowClick} />
    //                 </div> 