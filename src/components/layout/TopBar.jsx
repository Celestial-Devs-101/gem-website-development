import {
FaPhoneAlt,
FaEnvelope,
FaMapMarkerAlt,
FaLinkedinIn,
FaFacebookF
} from "react-icons/fa";

function TopBar(){

return(

<div className="bg-slate-950 text-white">

<div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

<div className="flex gap-8 text-sm">

<div className="flex items-center gap-2">
<FaPhoneAlt className="text-amber-400"/>
<span>+27 13 000 0000</span>
</div>

<div className="flex items-center gap-2">
<FaEnvelope className="text-amber-400"/>
<span>info@gem.co.za</span>
</div>

<div className="flex items-center gap-2">
<FaMapMarkerAlt className="text-amber-400"/>
<span>Emalahleni, South Africa</span>
</div>

</div>

<div className="flex gap-4">

<FaFacebookF className="cursor-pointer hover:text-amber-400 transition"/>

<FaLinkedinIn className="cursor-pointer hover:text-amber-400 transition"/>

</div>

</div>

</div>

)

}

export default TopBar;