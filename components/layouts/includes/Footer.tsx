import FooterDisclaimer from "./FooterDisclaimer";
import FooterNavLinks from "./FooterNavLinks";
import FooterSocialMedia from "./FooterSocialMedia";

export default function Footer(){
    return (<>
    <footer>
        <div className="container mx-auto px-[5%] py-[40px] border border-blue-500 m-0.5 p-0.5">
            <div className="border border-green-500 m-0.5 p-0.5">
                <FooterNavLinks/>
                <FooterSocialMedia/>
                <FooterDisclaimer/>

            </div>
        </div>
    </footer>
    </>)

}