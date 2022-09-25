import '../App.css';
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import {useState} from "react";

function Faq() {

    const [idToShow, setIdToShow] = useState(null);

    const questions = [
        {question:'Pourquoi avoir choisis Hugo comme team mate ? ',response:'Aucune idée', id:1},
        {question:'question 2',response:'reponse 2', id:2},
        {question:'question 3',response:'reponse 3', id:3},
    ];

    const listItems = questions.map((question) =>
        <div className="p-4 border-b border-primary" onClick={()=>setIdToShow(question.id)}>
            {question.question}
            <div className={`px-24 pt-4 ${idToShow === question.id ? 'flex':'hidden'}`}>
                {question.response}
            </div>
        </div>
    );

    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="border border-primary rounded-md max-w-4xl mx-auto">
                    <div className="p-4 bg-primary text-white">Comment ça marche ?</div>
                    {listItems}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Faq;
