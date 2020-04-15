import React, {Component} from 'react';
import classes from './Header.module.css'

export class Header extends Component {
    render() {
        return (
            <div className={classes.wrap}>
                <div className={classes.logoName}>
                    <img src="https://image.flaticon.com/icons/svg/942/942751.svg "/>
                    <div className={classes.name}>Valence.blog</div>
                </div>
                <div className={classes.buttons}>
                    <div className={classes.sign}>
                        <button>Sign in</button>
                    </div>
                    <div className={classes.reg}>
                        <button>Registration</button>
                    </div>

                </div>
            </div>
        )
    }
}

