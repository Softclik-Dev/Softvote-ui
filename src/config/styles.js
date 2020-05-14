export const authStyles = (theme) => {
  return {
    inputs: {
      marginBottom: 20,
    },
    actions: {
      margin: 20,
    },
    passwordIcon: {
      marginBottom: 10,
    },
    signupBtn: {
      padding: '10px 80px',
      borderRadius: '33px',
      textTransform: 'capitalize',
      marginBottom: 20,
      marginTop: 10,
      [theme.breakpoints.down('sm')]: {
        padding: '5px 50px',
      },
    },
    googleIcon: {
      width: 30,
      height: 30,
      marginRight: 20,
    },
    loginText: {
      color: '#2672b5',
      marginRight: 10,
    },
    error: {
      color: '#fc9283',
    },
    progress: {
      position: 'absolute',
    },
  };
};

export const headerStyle = (theme) => {
  return {
    logo: {
      height: 50,
      width: 50,
      [theme.breakpoints.down('sm')]: {
        height: 30,
        width: 30,
      },
    },
    authButtons: {
      padding: '5px 60px',
      borderRadius: '33px',
      textTransform: 'capitalize',
      marginRight: 10,
    },
  };
};

export const profileStyle = (theme) => {
  return {
    userPhoto: {
      height: 50,
      width: 50,
      [theme.breakpoints.down('sm')]: {
        height: 40,
        width: 40,
      },
      borderRadius: '50%',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    menuLink: {
      textDecoration: 'none',
      color: '#fff',
    },
  };
};

export const homeFooterStyle = (theme) => {
  return {
    homeFooter: {
      bottom: 0,
      top: 'auto',
      left: 0,
    },
    footerLink: {
      color: '#39b6ff',
      marginRight: 20,
    },
  };
};

export const homeStyle = (theme) => {
  return {
    main: {
      padding: 20,
      marginBottom: 20,
      flexGrow: 1,
      overflowY: 'auto',
    },
    content: {
      padding: 20,
    },
    getStarted: {
      marginTop: 20,
      padding: '10px 20px',
      textTransform: 'capitalize',
    },
    authButtons: {
      padding: '10px 60px',
      borderRadius: '33px',
      textTransform: 'capitalize',
      marginTop: 40,
      marginRight: 10,
      fontSize: '1.2rem',
      [theme.breakpoints.down('sm')]: {
        marginTop: 10,
        marginRight: 5,
        padding: '10px 40px',
        fontSize: '.8rem',
      },
    },
    homeImg: {
      width: '100%',
      height: '500px',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '300px',
      },
    },
  };
};

export const sidebarStyle = (theme) => {
  return {
    userPhoto: {
      height: 50,
      width: 50,
      [theme.breakpoints.down('sm')]: {
        height: 40,
        width: 40,
      },
      borderRadius: '50%',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    listItem: {
      color: '#fff',
      padding: 10,
      width: '100%',
      paddingLeft: 20,
      '&:hover': {
        cursor: 'pointer',
        background: '#181c28',
      },
    },
    mainSidebar: {
      background: '#292d39',
      width: '250px',
      height: '100vh',
      overflowY: 'auto',
      margin: 0,
      flexShrink: 0,
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    mobSidebar: {
      background: '#292d39',
      width: '250px',
      overflowY: 'auto',
    },
  };
};

export const createVoteStyle = (theme) => {
  return {
    main: {
      padding: 20,
      marginBottom: 20,
      marginTop: 20,
      flexGrow: 1,
      overflowY: 'auto',
    },
    content: {
      padding: 10,
      background: '#efefef',
      marginBottom: 15,
    },
    paper: {
      background: '#fff',
      padding: 10,
      marginBottom: 10,
    },
    submitBtn: {
      padding: '10px 80px',
    },
    input: {
      marginBottom: 20,
      
    },
    save: {
      textTransform: 'capitalize',
      padding: '10px 60px',
    },
  };
};

export const textBoxStyle = (theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 8,
    },
    label: {
      color: '#2343a3',
    },
    input: {
      borderRadius: 4,
      background: 'rgba(55,68,83,0.5)',
      border: 'none',
      fontSize: 16,
      padding: '10px 12px',
      color: 'white',
      transition: theme.transitions.create(['Border-color', 'box-shadow']),
      '&:focus': {
        borderColor: theme.palette.primary.main,
      },
    },
    helper: {
      color: '#a33a68',
      fontSize: '0.8rem',
    },
  };
};
