"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { BiLogoGithub } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineKey } from 'react-icons/hi';
import { LiaEyeSolid } from 'react-icons/lia';
import { LiaEyeSlashSolid } from 'react-icons/lia';

 
import { useRouter } from 'next/navigation'



const SignIn = () => {
    const [formData, setFormData] = useState( {email: "", password: ""})
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    
    const router = useRouter()

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
        
    }

    const setUserDataToLocalStorage = () => {
        localStorage.setItem('userDetails', JSON.stringify(formData))
    }

    async function handleSignIn(event) {
        event.preventDefault();
        const requestBody = JSON.stringify(formData);
      
        try {
          const response = await fetch('https://sig-staging-api-a4c37da3d933.herokuapp.com/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: requestBody,
          });
      
          if (response.ok) {
            console.log('yes')
            router.push('/dashboard/transformations')
            setUserDataToLocalStorage()
          } else {
            setError('Incorrect email or password. Please try again.');
            console.log(data.error)
          }
        } catch (error) {
            setError('The request timed out. Please try again later.'); 
        }
        setTimeout(() => {
            setError(null);
        }, 5000);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
      


    return (
        <div className='w-ful h-screen flex flex-col  py-8 px-4 mb-96'>
            <Image
                src="/Sigflow logo.png"
                width={90}
                height={25}
                alt="Sigflow logo"
                className='mb-12'
            />

            <div className=' mx-auto w-auto p-8 border border-solid rounded-lg border-gray-200'>
                <h1 className='text-center text-xl font-medium'>Welcome back!</h1>
                <p className='text-center text-sm font-normal mt-1 text-gray-500'>Sign in to access your account</p>

                <form onSubmit={handleSignIn} className='w-full flex flex-col gap-2 mt-8 items-center'>
                    <div className='flex flex-col w-full gap-1'>
                        <label htmlFor="email" className='font-normal text-sm'>Email</label>
                        <input 
                        type="email" name='email'
                        id='email'
                        className='border border-solid rounded-lg border-gray-200 py-1 px-2 '
                        onChange={handleChange}
                        
                        />
                    </div>

                    <div className='flex flex-col w-full gap-1 mt-4'>
                        <label htmlFor="password" className='font-normal text-sm'>Password</label>
                        <div className="relative w-full">
                            <input 
                            type={showPassword ? "text" : "password"} name='password'
                            id='password'
                            className='border border-solid rounded-lg border-gray-200 py-1 px-2 w-full'
                            onChange={handleChange}
                            />
                            <div className="absolute right-3 top-2">
                                {showPassword && <LiaEyeSolid size={20} className='text-gray-600 cursor-pointer' onClick={togglePasswordVisibility} />}
                                {!showPassword && <LiaEyeSlashSolid size={20} className='text-gray-600 cursor-pointer' onClick={togglePasswordVisibility} />}
                            </div>
                        </div>
                        

                        <p className='font-medium text-sm text-primary '>Forgot password?</p>
                    </div>


                    <button 
                        className='w-full mt-8 py-2 px-5 bg-primary
                        border-1 border-solid rounded-lg border-primary 
                        font-semibold text-m text-white hover:bg-white border-2
                         hover:border-primary transition-all duration-500 hover:text-primary'>
                        Sign In
                    </button>

                    {error && <div className="text-red-500">{error}</div>}

                </form>


                    <div className='my-6'>
                        <p className='text-center my-6 text-lg font-medium text-gray-400'>OR</p>

                        <div className='grid grid-rows-2 grid-cols-2 gap-6 place-items-center'>
                            <div className='flex items-center gap-2
                                border-2 border-solid rounded-lg border-gray-200
                                py-2 px-3 w-max text-m font-normal'
                            >Sign in with GitHub <BiLogoGithub size={32} />
                            </div>

                            <div className='flex items-center gap-2
                                border-2 border-solid rounded-lg border-gray-200
                                py-2 px-3 w-max text-m font-normal'
                            >Sign in with Google <FcGoogle size={32} />
                            </div>

                            <div className='flex items-center gap-2
                                border-2 border-solid rounded-lg border-gray-200
                                py-2 px-3 w-max text-m font-normal col-span-2'
                            >Sign in with SSO <HiOutlineKey color='#32D583' size={32} />
                            </div>
                        </div>
                    </div>
            </div>
            <p className='text-center mt-3 text-medium font-normal'>Don&apos;t have an account? <span className='font-medium text-primary'>Sign Up</span></p>
        </div>
    );
}
 
export default SignIn;