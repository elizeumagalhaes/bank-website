const Card = (props) => {
    return(
        <div className="bg-white py-[8vh] px-[7vh] rounded-3xl flex flex-col items-center justify-center transform transition duration-500 hover:scale-105">
            <div className="text-4xl text-purple-meet bg-lavender-meet p-8 rounded-full flex justify-center"><i class={props.icon}></i></div>
            <div className="text-2xl mt-6">{props.text}</div>
        </div>    
    )
};

export default Card;