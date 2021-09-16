import styled from 'styled-components'

export const Perfil = styled.div`
display:flex;
padding:20px 10px;
font-size:40px;
text-align:center;
color:white;
    &:hover{
        color:#FED941;
    }
`;

export const ContCards = styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, 220px);
grid-gap:20px;
padding:20px;
justify-content:center;
`;

export const Tarjetas = styled.div`
display:flex;
justify-content:center;

`;

export const ModalHeader = styled.div`
    position:absolute;
    left:97%;
    top:2%;  
`;

export const InputClose = styled.input`
 border:none;
 background:transparent;
 color:grey;
    &:hover{
        color:red;
        font-size:20px;
        font-weight:bold;
    }
`;

export const ModalBody = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
    color:white;
    padding:20px;
`;

export const ModalBodyOverview = styled.div`
    display:flex;
    flex-direction:column;
    align-self:center;
    text-align:justify;
`;

export const ModalBodyImg = styled.img`
    width:100%;
`;


export const BtnTrailer = styled.input`
    border:none;
    margin:10px;
    background:#FED941;
    width:85%;
    padding:5px;
    border-radius:5px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #000000;
`;

export const BtnDespues = styled.input`
    border:none;
    margin:10px;
    background:#0C0E16;
    width:85%;
    padding:5px;
    border-radius:5px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #FED941;
`;

export const Badge = styled.span`
    position:relative;
    top:20%;
    width:114px;
    height:45px;
    background: rgba(0, 0, 0, 0.73);
    border-radius: 40px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    display:flex;
    align-items:center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #FFFFFE;
    border: 1px solid #FED941;
    border-left:none;
    justify-content:center;
`;

/* -----------------------------------------------------LOGIN Y REGISTER------------------------------------- */
export const Contenedor = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    color:white;
    width:100%;
`;
export const Formulario = styled.form`
    display:flex;
    flex-direction:column;
    width:80%;
    padding:20px 40px;
    align-items:center;
`;

export const Labels = styled.label`
    padding:20px 10px;
    text-align:left;
    width:100%;
    border-radius:10px;
`;
export const Inputs = styled.input`
    padding:10px 5px;
    text-align:left;
    width:100%;
    border-radius:10px;
`;
export const Buttons = styled.input`
    padding:10px;
    margin:10% 0 5% 0;
    width:60%;
    border-radius:10px;
    background:#FED941;
`;

/* --------------------------------------------------PERFIL-------------------------------------------------- */
export const ContenedorPerfil = styled.div`
    width:70%;
    margin:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:40px;
    color:white;
`;

export const ContenedorSpans = styled.div`
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
`;

export const ImgPerfil = styled.img`
    border-radius:100%;
    width:170px;
    height:170px;
    object-fit:cover;
    margin-bottom:40px;

`;

export const LabelPerfil = styled(Labels)`
    color:white
`;

export const FormPerfil = styled.span`
    color:gray;
    border:2px solid red;
    padding:5px;
    margin-bottom:10px;
    border-radius:5px;
    cursor:pointer;
    &:hover{
        color:white;
        background:red;
    }
`;

export const InputFormPerfil = styled.input`
    width:70%;
    margin:auto;
    padding:8px;
    border-radius:10px;
`;
export const LabelFormPerfil = styled.label`
    padding:20px 10px;
    text-align:center;
    width:100%;
    border-radius:10px;
    color:white;
`;
export const ButtonFormPerfil = styled(Buttons)`
    width:40%;
    border-radius:10px;
    color:gray;
    &:hover{
        background:#07c637
        color:white;
    }
`;

export const ReturnHome = styled.div`
    padding:0 40px;
    width:100%;
    text-align:center;
    margin-top:10px
    
`;

export const SpanEditar = styled.span`
    color:gray;
    border:2px solid green;
    padding:5px;
    margin-bottom:10px;
    border-radius:5px;
    cursor:pointer;
        &:hover{
            color:white;
            background:green;
        }
`;

export const SpanEliminar = styled.span`
    color:gray;
    border:2px solid red;
    padding:5px;
    margin-bottom:10px;
    border-radius:5px;
    cursor:pointer;
    &:hover{
        color:white;
        background:red;
    }
`;

/* -------------------------------------------------CARDS------------------------------------------------- */

export const ImgCard = styled.img`
    border-radius:10px;
    box-shadow: 0px 7px 26px 4px rgba(0,0,0,0.51);
`;

// export const ImgCard = ImgCardStyle

/* -------------------------------------------------NAVBAR------------------------------------------------- */
 export const InputSearch = styled.input`
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    width:90%;
    padding:10px;
    border:none;
 `;
 export const ButtonSearch = styled.button`
    width:10%;
    margin:auto;
    background:#FED941;
    padding:12px;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    border:none;
 `;

 export const FormSearch = styled.form`
    border: 1px solid #FED941;
    border-radius:10px;
    width:50%;
    bakcground:#FED941;
 `;

 /* ------------------------------------------------CARRUSEL------------------------------------------------ */

 export const ContSwiper = styled.div`
    width:500%;
    
 `;

 export const ContSpinner = styled.div`
    margin-bottom:100px;
    display:flex;
    justify-content:center;
    align-items:center;
 `;

 export const ImgSwiper = styled.img`
    height:320px;
    object-fit:cover;
    width:100%;   
 `;

 export const FontNav = styled.div`
 font-family: 'Inter', sans-serif;
 `;

 export const H1SeccionPeliculas =  styled.h1`
   color:white;
   font-family: 'Montserrat', sans-serif; 
   padding: 10px 20px 0 20px;
 `;