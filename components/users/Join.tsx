import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { userActions, UserType } from '@/modules/users'
import FormLayout from "../layout/FormLayout"
import Link from "next/link"
import tw from "tailwind-styled-components"
import { SEO } from "../common/SEO"

const Join: React.FC = () => {
    const [user, setUser] =useState<UserType>({
        email:'', password:'', username:'', birth:'', gender:''
    })
    
    const dispatch = useDispatch()
    const handleChange = (e: { preventDefault: () => void; target: { name: any; value: any } }) =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUser({...user, [name]: value})
    }

  return (
    <FormLayout>
        <SEO title="회원가입" />
        <form onSubmit={
            e=> {
                e.preventDefault()
                dispatch(userActions.joinRequest(user))
                setUser({ email:'', password:'', username:'', birth:'', gender:'' })
            }
        }>
            <div className="flex items-center justify-center min-h-screen">
                <div className="z-20 px-12 py-12 bg-white shadow-xl rounded-2xl">
                    <div>
                        <h1 className="mb-4 text-3xl font-bold text-center cursor-pointer"><Link href="/"><a>
                            Your read advice</a></Link></h1>
                        <p className="mb-8 text-sm font-semibold tracking-wide text-center text-gray-700 cursor-pointer w-80">
                            리드바이스와 함께하기</p>
                    </div>
                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="name@example.com"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                    <input
                        type="Password"
                        placeholder="비밀번호"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                    <input
                        type="Password"
                        placeholder="비밀번호 재확인"
                        id="RePassword"
                        name="RePassword"
                        className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="사용자 이름"
                        onChange={handleChange}
                        className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                    <div className="mb-3 form-floating">
                        <input
                            type="date"
                            id="birth"
                            name="birth"
                            onChange={handleChange}
                            className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"/>
                    </div>
                </div>
                <div>
                    <div className="form-check form-check-inline">
                        <input type="checkbox" 
                            name="gender" 
                            id="male" 
                            value="male"
                            onChange={handleChange}
                            className="float-left w-4 h-4 my-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"/>
                        <label className="inline-block text-gray-800 form-check-label" 
                            htmlFor="male">남성</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="checkbox" 
                            name="gender" 
                            id="female"
                            value="female"
                            onChange={handleChange}
                            className="float-left w-4 h-4 my-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none" checked/>
                        <label className="inline-block text-gray-800 form-check-label"
                            htmlFor="female">여성</label>
                    </div>
                </div>
                <hr className="mb-3" />
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="aggrement" required />
                    <label className="custom-control-label" htmlFor="aggrement">개인정보 수집 및 이용에 동의합니다.</label>
                    <div className="mt-6 text-center">
                        <button className="w-64 py-3 text-xl text-white bg-purple-400 rounded-2xl" 
                            type="submit">Sign Up</button>
                    </div>
                </div>
                <hr className="my-4"/>
                <h2 className="mb-3 text-center fs-5 fw-bold">Or use a third-party</h2>
                <button className="py-2 mb-2 w-100 btn btn-outline-dark rounded-3" type="submit">
                    Sign up with Twitter
                </button>
                <button className="py-2 mb-2 w-100 btn btn-outline-primary rounded-3" type="submit">
                    Sign up with Google
                </button>
                </div>
            </div>
        </form>
    </FormLayout>
  );
}
export default Join