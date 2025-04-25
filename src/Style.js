const Style = {
    entirebody: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        height: '50px',
        position: 'fixed',
        top: '0',
        width: '100%',
        left: '0',
        backgroundColor: '#4285f4',
        boxShadow: '0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28)'
    },
        h4: {
            margin: '16px 10px',
            color: '#fff',
            fontFamily:'Helvetica, sans-serif'
        },
        form:{
            float: 'left',
            marginTop: '7px'
        },
            input:{
                border: '0',
                padding: '0 10px',
                height: '36px',
                width: '200px',
                backgroundColor: 'rgba(255,255,255,.14)',
                color: '#fff',

            },
            // inputus: getPlaceholderStyles({ color: 'red' }),
            button:{
                border: '0',
                height: '36px',
                padding: '0 20px',
                color: '#fff'
            },
    container: {
        marginTop: '40px',
        height: 'calc(100% - 80px)',
        display: 'flex',
        flexDirection: 'row'
    },
        sidebar: {
            height: '100%',
            overflow: 'auto',
            width: '250px'
        },
            nav: {
                margin: '20px',
                textAlign: 'center'
            },
                li: {
                    display: 'block'
                },
                    a: {
                        textDecoration: 'none',
                        fontSize: '24px',
                        fontFamily:'Helvetica, sans-serif',
                        lineHeight: '36px'
                    },
        content: {
            height: '100%',
            overflow: 'hiden',
            width:'100%',
            padding: '20px'
        },
            champion: {
                height:'100px'
            },
            winners: {
                height:'calc(100% - 270px)',
                overflow: 'auto'
            },
                title: {
                    fontFamily:'Helvetica, sans-serif',
                    color: '#616161',
                    marginBottom: '10px',
                    lineHeight: '24px',
                    fontSize: '13px',
                    marginLeft: '20px'
                },
                row: {
                    background: '#ffffff',
                    boxShadow: '0 -1px 0 #e0e0e0, 0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.24)',
                    padding: '10px',
                    display: 'flex'
                },
                    detail: {
                       width:'25%',
                       fontFamily:'Helvetica, sans-serif',
                       fontSize: '12px'
                    },  
     footer: {
        height: '30px',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        left: '0',
        textAlign: 'center',
        backgroundColor: '#ddd'
    }

}

export default Style
