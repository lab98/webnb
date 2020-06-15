import * as React from 'react';
import './form.css';


/*const useStyles = makeStyles((theme) => ({
    root: {
    },
    appBar: {
        background: "#fff",
        padding: 10,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: (props: IDrawerProps) => props.drawerWidth,
        width: (props: IDrawerProps) => `calc(100% - ${props.drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appLogo: {
        maxWidth: 200,
        maxHeight: 50,
        display: "block",
        margin: "0 auto"
    },
    content: {
        padding: theme.spacing(3),
        paddingTop: 100,
        paddingBottom: 150,
    },
    contentShift: {
        paddingLeft: (props: IDrawerProps) =>  props.drawerWidth,
        transition: theme.transitions.create(["padding"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    menuIcon: {
        width: 50,
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        outline: "none",
        "&:hover": {
            outline: "none"
        },
        "&:focus": {
            outline: "none"
        }
    },
    footerContainer: {
        backgroundColor: "#fff",
        width: "100%",
        maxHeight: 120,
        position: "fixed",
        boxShadow: "1px 1px 10px #ddd",
        bottom: 0,
        paddingTop: 10,
        paddingBottom: 20,
    },
    footerContent: {
        display: "block",
        margin: "0 auto",
        textAlign: "center"
    },
    poweredByImage: {
        maxHeight: 80
    }
}));*/

const App = () => {

   // const classes = useStyles();
   // const [drawerOpen, setDrawerOpen] = React.useState(false);
    //const [currentUser, setCurrentUser] = React.useState(firebase.auth().currentUser);
   // const loginContainerEl = React.createRef<HTMLDivElement>();

  /*  const logout = async () => {
        if (confirm("Vuoi davvero effettuare il logout?")) {

        }
    };

    const toggleDrawer = () => {

    };

    React.useEffect(() => {

    }, []);*/


    return (
        <div id="dio">
        <fieldset>
            <legend style="color: red;">Account</legend>
            <label class="mandatory" for="email">Email</label>
            <input id="email" name="email" type="text" size="40" maxlength="40"required/> &nbsp;&nbsp;&nbsp;
            <br/>
            <br/>

            <label class="mandatory" for="pass">Password</label>
            <input id="password" name="pass" type="password" title="Almeno 8 caratteri, una lettera maiuscola e un numero" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$"size="40" maxlength="40"required/>
        </fieldset>

        <button class="confirm" name="ok" id="ok" type="submit" value="Invia"></button>
        </div>
    );
};

export default App;
