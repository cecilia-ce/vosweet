import React, {Component} from 'react';
import './Login.css'
{/*import imagem from '../imagens/background-principal-img.png';*/}

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="imagem">
                    {/*<img src={imagem} alt="imagem" />*/}
                    
                </div>
                <div>
                    <form>
                        <h1>Vosweet</h1>
                        <h2>Uma mensagem em um click.</h2>
                        <fieldset>
                            <p>Faça o login na sua conta!</p>
                            <div>
                                <input type="email" name="email" placeholder="E-mail"/>
                            </div>
                            <div>
                                <input type="password" name="password" placeholder="Senha"/>
                            </div>
                        </fieldset>

                    </form>
                </div>
            </div>

        )
    }
}