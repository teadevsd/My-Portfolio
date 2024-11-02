
import styled from "styled-components"


const Connect = () =>{
    return (
        <Wrapper>
            <Aboutcont>
               <Connectone>
                    <h2>Lets Connect</h2>
                    <p>Please fill out the form on this section to contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.</p>
               </Connectone>

               <Messageme>
                    <h2>Let’s Message me</h2>
                    <form action="">
                        <input type="text" placeholder="Your name"/><br/><br/>
                        <input type="email" placeholder="Your email"/><br/><br/>
                        <textarea name="" id=""placeholder="Message"></textarea>
                    </form>
                    <button type="submit">Submit</button>
               </Messageme>
            </Aboutcont>
        </Wrapper>
    )
}

export default Connect

const Wrapper = styled.div`
    margin: 0 auto;
    background-color: #FFF8F3;
    width: 100%;
    height: auto;
`
const Aboutcont = styled.div`
    max-width: 1920px;
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    gap: 30px;
    flex-wrap: wrap;
    padding: 50px 0;

    h2{
        margin-bottom: 20px;
    }
`
const Connectone = styled.div`
    max-width: 500px;
`
const Messageme = styled.div`
   

    input{
        border: none;
        outline: none;
        width: 320px;
        height: 40px;
        padding: 20px;
        border-radius: 8px;
    }
    textarea{
        overflow: hidden;
        border: none;
        outline: none;
        width: 320px;
        height: 120px;
        padding: 20px;
        border-radius: 8px;
    }
    button{
        background-color: #b31d1d;
        padding: 16px 40px;
        border: none;
        color: white;
        border-radius: 8px;
        margin-top: 30px;
        cursor: pointer;
    }
`