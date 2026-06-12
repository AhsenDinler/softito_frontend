import React from "react";
const DegistirilemeyenKart=(props)=>{
    const deneVeHataGoster=()=>{
        try{
            props.baslik="Yeni Başlık";
        }catch(hata){
            alert("hata Yakalandı ü! Props Değiştirilemez"+hata.message);
        }
    }
    return(
        <div className="card">
            <h4 className="font-bold">(props.baslik</h4>
            <p className="text-gray-500">Gelen Prop Değeri{props.baslik}</p>
            <button onclick={deneVeHataGoster} className="btn-red">Prop değiştirmeyi dene</button>
        </div>
    )
}

const Demo8ReadOnlyProps=()=>{
    return(
        <div className="p-4">
            <h3 className="text-xl font-bold">Demo 8: Salt Okunur{readony}Props</h3>
            <div className="mt-4">
                <DegistirilemeyenKart baslik="Değiştirilemeyen Kart Başlık"/>
            </div>
        </div>
    )
}
export default Demo8ReadOnlyProps;