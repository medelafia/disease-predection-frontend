import { useNavigate } from "react-router-dom"

export default function ServiceBox({text ,title , btnLink , variant, children}){
    const navigate = useNavigate()
    const navigateToLink = () => {
        navigate(btnLink)
    }
    return (
        <div className="col-sm-12 col-md-6 my-3">
            <div className={`container custom-bg-${variant} p-3 rounded d-flex align-items-center justify-content-center flex-column`}>
                {children}
                <h3 className="text-capitalize title-font-size text-white">{title}</h3>
                <p className="text-center my-4">
                    {text}
                </p>
                <button className="btn btn-light rounded-pill px-3" onClick={navigateToLink}><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    )
}