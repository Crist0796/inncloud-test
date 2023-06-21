import React, { useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, errors, reset } = useForm({
        name: '',
        username: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };

    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('register', data));
    };

    return (
        <>

        <Head title='Login'/>

    <main className="mt-0 transition-all duration-200 ease-in-out">
      <section>
        <div className="relative flex items-center min-h-screen p-0 overflow-hidden bg-center bg-cover">
          <div className="container z-1">
            <div className="flex flex-wrap -mx-3">
              <div className="flex flex-col w-full max-w-full px-3 mx-auto lg:mx-0 shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
                <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none lg:py4 dark:bg-gray-950 rounded-2xl bg-clip-border">
                  <div className="p-6 pb-0 mb-0">
                    <h4 className="font-bold text-black">Registrar Usuario</h4>
                    <p className="mb-0">Ingrese su información para crear usuario</p>
                  </div>
                  <div className="flex-auto p-6">
                    <form role="form" onSubmit={submit}>
                    <div className="mb-4">
                        <input type="text" placeholder="Nombre" name="name" value={data.name} onChange={onHandleChange} className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-size-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange-500 focus:outline-none" />
                        <p className='text-red-500'>{errors.username}</p>
                      </div>
                      <div className="mb-4">
                        <input type="text" placeholder="Nombre de usuario" name="username" value={data.username} onChange={onHandleChange} className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-size-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange-500 focus:outline-none" />
                        <p className='text-red-500'>{errors.username}</p>
                      </div>
                      <div className="mb-4">
                        <input type="password" placeholder="Contraseña" name="password" value={data.password} onChange={onHandleChange} className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-size-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange-500 focus:outline-none" />
                        <p className='text-red-500'>{errors.password}</p>
                      </div>
                      <div className="mb-4">
                        <input type="password" placeholder="Repita la contraseña" name="password_confirmation" value={data.password_confirmation} onChange={onHandleChange} className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-size-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange-500 focus:outline-none" />
                        <p className='text-red-500'>{errors.password_confirmation}</p>
                      </div>

                      <div className="text-center">

                        <button type="submit"className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-3">
                        <div className="absolute inset-0 w-3 bg-orange-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-black group-hover:text-white">Iniciar sesión</span>
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* <div className="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 text-center pt-0 px-1 sm:px-6">
                    <p className="mx-auto mb-6 leading-normal text-size-sm">¿No tienes una cuenta? <Link href={route('register')} className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500">Registrarse</Link></p>
                  </div> */}
                </div>
              </div>
              <div className="absolute top-0 right-0 flex-col justify-center hidden w-6/12 h-full max-w-full px-3 pr-0 my-auto text-center flex-0 lg:flex">
                <div className={`relative flex flex-col justify-center h-full bg-right px-24 bg-orange-500 m-4 overflow-hidden rounded-xl`} /* style={{ backgroundImage: `url(${logo})`}} */>
                  <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-[#F02B12] to-[#FEC009] opacity-60 sm:bg-black"></span>
                  <h2 className="mt-12 font-bold text-size-8xl text-white shadow-white">INNCLOUD</h2>
                  <p className="z-20 text-white text-size-xl shadow-white">PRUEBA TÉCNICA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
    );
}

