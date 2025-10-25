"use client"
export function AuthPage({isSignin}:{
    isSignin : boolean
}){
    return <div className="w-dvw h-dvh flex justify-center items-center flex-col gap-4"> 
        <div className="rounded-2xl p-4 text-black bg-white shadow-md flex flex-col gap-4">
            <h2 className="text-xl font-bold">{isSignin ? 'Sign In' : 'Sign Up'}</h2>
            <div className="flex flex-col gap-2">
                <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded" />
                <input type="password" placeholder="Password" className="border border-gray-300 p-2 rounded" />
                <button onClick={()=>{

                }} className="bg-blue-500 text-white p-2 rounded">Submit</button>
            </div>
        </div>
    </div>
}