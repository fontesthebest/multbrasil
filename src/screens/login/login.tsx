
import "./login.css"

function login(){
    return(
        <main className="view-login">
            <form action="" className="form-login">
                <label htmlFor="">Email:</label>
                <input type="text" placeholder="Exemplo: joao@gmail.com"/>
                <label htmlFor="">Nome:</label>
                <input type="text" placeholder="Exemplo: João Gonçalves da cunha"/>
                <label htmlFor="">Usuario:</label>
                <input type="text" placeholder="Exemplo: Joaodogas23"/>
                <label htmlFor="" >Senha:</label>
                <input type="number" placeholder="Digite sua senha"/>
                <label htmlFor="">Confirmar Senha:</label>
                <input type="number" placeholder="Confirme sua senha"/>
                <button type="submit">Enviar Cadastro</button>
            </form>
        </main>
    )
}

export default login;