import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule'


const Hadiseh = () =>{
    return(
        <>
        <br /><br />
        <div className='w-[90%] md:w-[50%] flex flex-col gap-4 m-auto'>

                {/* شنبه */}
            <div className='w-full min-h-36 flex justify-between'>
            <div className=' w-[10%] py-14 lg:text-xl text-xl text-slate-50 bg-blue-950 bg-opacity-90 border-2 border-blue-950 rounded-2xl text-center flex justify-center align-middle'><p className='rotate-90 m-auto'>شنبه</p></div>
            <div className='w-[87%] text-xs bg-sky-300 bg-opacity-50 border-2 border-sky-300 rounded-2xl px-2 flex flex-wrap items-center '>
            <div className='h-fit text-center mx-2 my-5'>
                    <p>-</p>
                    <hr className='mx-1 my-2 bg-blue-950 h-[0.1rem]' />
                    <p>-</p>

                </div>
                <hr className='h-14 w-[0.01rem] bg-blue-950 mx-2 ' />
            </div>
            </div>
                {/* یکشنبه */}
        <div className='w-full min-h-36 flex justify-between'>
            <div className=' w-[10%] py-14 lg:text-xl text-lg text-slate-50 bg-blue-950 bg-opacity-90 border-2 border-blue-950 rounded-2xl text-center flex justify-center align-middle '><p className='rotate-90'>یکشنبه</p></div>
            <div className='w-[87%] text-xs bg-sky-300 bg-opacity-50 border-2 border-sky-300 rounded-2xl px-2 flex flex-wrap items-center'>
                <div className='h-fit text-center mx-2 my-5'>
                    <p>رهام</p>
                    <hr className='mx-4 my-2 bg-blue-950 h-[0.1rem]' />
                    <p>15:00 - 17:00</p>

                </div>
                <hr className='h-14 w-[0.01rem] bg-blue-950 mx-2 ' />
                <div className='h-fit text-center mx-2 my-5'>
                    <p>کیان</p>
                    <hr className='mx-4 my-2 bg-blue-950 h-[0.1rem]' />
                    <p>18:00 - 20:00</p>
                    <hr className='mx-4 my-2 bg-blue-950 h-[0.1rem]' />
                    <p className='text-[10px]'>از 30 دی / 10جلسه</p>

                </div>
            </div>
        </div>
                {/* دوشنبه */}
        <div className='w-full min-h-36 flex justify-between'>
        <div className=' w-[10%] py-14 lg:text-xl text-lg text-slate-50 bg-blue-950 bg-opacity-90 border-2 border-blue-950 rounded-2xl text-center flex justify-center align-middle'><p className='rotate-90'>دوشنبه</p></div>
            <div className='w-[87%] text-xs bg-sky-300 bg-opacity-50 border-2 border-sky-300 rounded-2xl px-2 flex flex-wrap items-center'>
            <div className='h-fit text-center mx-2 my-5'>
                    <p>امیر مشوق</p>
                    <hr className='mx-4 my-2 bg-blue-950 h-[0.1rem]' />
                    <p>12:00 - 13:00</p>
                    <hr className='mx-4 my-2 bg-blue-950 h-[0.1rem]' />
                    <p className='text-[10px]'>از 15بهمن / 10جلسه</p>
                </div>
            <div className='h-fit text-center mx-2 my-5'>
                    <p>آرش</p>
                    <hr className='mx-4 my-2 bg-blue-950 h-[0.1rem]' />
                    <p>13:00 - 14:30</p>

                </div>
                <hr className='h-14 w-[0.01rem] bg-blue-950 mx-2 ' />
                <div className='h-fit text-center mx-2 my-5'>
                    <p>یسنا</p>
                    <hr className='mx-4 my-2 bg-blue-950 h-[0.1rem]' />
                    <p>15:00 - 18:00</p>

                </div>
                <hr className='h-14 w-[0.01rem] bg-blue-950 mx-2 ' />
                <div className='h-fit text-center mx-2 my-5'>
                    <p>کارن</p>
                    <hr className='mx-4 my-2 bg-blue-950 h-[0.1rem]' />
                    <p>18:00 - 20:00</p>

                </div>
            </div>
        </div>
                {/* سه شنبه */}
        <div className='w-full min-h-36 flex justify-between'>
        <div className=' w-[10%] py-14 lg:text-xl text-lg text-slate-50 bg-blue-950 bg-opacity-90 border-2 border-blue-950 rounded-2xl text-center flex justify-center align-middle'><p className='rotate-90 z-50'>سه‌شنبه</p></div>
            <div className='w-[87%] text-xs p-2 bg-sky-300 bg-opacity-50 border-2 border-sky-300 rounded-2xl px-2 flex flex-wrap items-center'>
            <div className='h-fit text-center mx-2 my-5 '>
                    <p>نامی</p>
                    <hr className='mx-4 my-2 bg-blue-950 h-[0.1rem]' />
                    <p>17:00 - 18:00</p>

                </div>
                <hr className='h-14 w-[0.01rem] bg-blue-950 mx-2' />
                <div className='h-fit text-center mx-2 my-5'>
                    <p>بردیا</p>
                    <hr className='mx-4 my-2 bg-blue-950 h-[0.1rem]' />
                    <p>18:30 - 20:30</p>
                    <hr className='mx-4 my-2 bg-blue-950 h-[0.1rem]' />
                    <p className='text-[10px]'>از 2 بهمن / 12جلسه</p>
                </div>
               
            </div>
        </div>
                {/* چهارشنبه */}
        <div className='w-full min-h-36 flex justify-between'>
        <div className=' w-[10%] py-14 lg:text-xl text-lg text-slate-50 bg-blue-950 bg-opacity-90 border-2 border-blue-950 rounded-2xl text-center flex justify-center align-middle'><p className='rotate-90'>چهارشنبه</p></div>
            <div className='w-[87%] text-xs bg-sky-300 bg-opacity-50 border-2 border-sky-300 rounded-2xl px-2 flex flex-wrap items-center'>
            <div className='h-fit text-center mx-2 my-5'>
                    <p>فاطیما</p>
                    <hr className='mx-1 my-2 bg-blue-950 h-[0.1rem]' />
                    <p>15:30 - 17:30</p>

                </div>
                <hr className='h-14 w-[0.01rem] bg-blue-950 mx-2 ' />
                <div className='h-fit text-center mx-2 my-5'>
                    <p>آرتین</p>
                    <hr className='mx-1 my-2 bg-blue-950 h-[0.1rem]' />
                    <p>17:30 - 19:00</p>

                </div>
            </div>
        </div>
                {/* پنجشنبه */}
        <div className='w-full min-h-36 flex justify-between'>
        <div className=' w-[10%] py-14 lg:text-xl text-lg text-slate-50 bg-blue-950 bg-opacity-90 border-2 border-blue-950 rounded-2xl text-center flex justify-center align-middle'><p className='rotate-90'>پنجشنبه</p></div>
        <div className='w-[87%] text-xs bg-sky-300 bg-opacity-50 border-2 border-sky-300 rounded-2xl px-2 flex flex-wrap items-center'>
        <div className='h-fit text-center mx-2 my-5'>
                    <p>آرشیدا</p>
                    <hr className='mx-1 my-2 bg-blue-950 h-[0.1rem]' />
                    <p>12:00 - 14:30</p>

                </div>
                <hr className='h-14 w-[0.01rem] bg-blue-950 mx-2 ' />
                <div className='h-fit text-center mx-2 my-5'>
                    <p>رباتیک</p>
                    <hr className='mx-1 my-2 bg-blue-950 h-[0.1rem]' />
                    <p>15:00 - 19:00</p>

                </div>
        </div>
        </div>
        
        </div>
        <br /><br /><br />
        <div className='text-center'>
        <h2 className='m-4 inline-block text-sm'>تعداد کل دانشجوهای خصوصی: 6</h2>
        <h2 className='m-4 inline-block text-sm'>دانشجوهای فیوچر : نامی - </h2>
        <h2 className='m-4 inline-block text-sm'>دانشجوهای شارپ : کیان - کارن - بردیا - امیر مشوق - آرتین </h2>
        </div>
        </>
    );
};
export default Hadiseh;

