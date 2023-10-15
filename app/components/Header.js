import Image from "next/image";

const Header = () => {
    return (
        <header className="w-full flex justify-end  pr-10 py-4 bg-white shadow-sm ">
            <div className="flex justify-center items-center gap-1">

                <div className="w-9 h-9 bg-primary flex justify-center items-center rounded">
                    <p className="text-2xl font-bold  text-white leading-3">S</p>
                </div>

                <div className="h-full">
                    <p className="font-semibold text-sm ">Sigflow</p>
                    <p className="font-normal text-sm ">Adeoluwa Siyanbade</p>
                </div>
            </div>
        </header>
    );
}
 
export default Header;