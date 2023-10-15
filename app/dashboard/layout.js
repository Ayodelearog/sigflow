import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-5 max-w-screen-xl mx-auto overflow-x-hidden overflow-y-hidden'>
            <div class="col-span-1 w-full h-screen ">
                <Sidebar />
            </div>

            <div class="col-span-4 min-h-screen relative">
                <Header />

                <div className="w-full min-h-full pl-10 pr-10 pt-8 overflow-y-auto ">
                    {children}
                </div>
            </div>
        </div>
        
    );
}
 
export default DashboardLayout;