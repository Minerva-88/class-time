const Home = () =>{
    return(
        <>
        <br /><br />
        <h1 className="text-center text-[18px] md:text-2xl text-blue-950">دستورالعمل برگزاری کلاس های خصوصی</h1>
        <br /><br /> 
        <div className="w-[90%] m-auto flex flex-wrap gap-5 items-center">
            <div className="w-[410px] border-2 border-sky-300 relative h-[130px] leading-5">
                <div className="absolute top-[-14px] left-2 text-[10px] text-blue-950 p-2 bg-sky-300">روند برگزاری کلاس‌ها</div>
                
                <p className="text-[10px] pt-7  text-justify p-5">
                دانشجویان موظف‌اند هم‌زمان با مشاهده دوره‌های آفلاین، در کلاس‌های حضوری شرکت کنند. این کلاس‌ها برای رفع اشکال، حل پروژه و پیشرفت بر اساس رودمپ تعیین‌شده برگزار می‌شوند. پیش از هر جلسه، محتوای مرتبط باید مشاهده شود تا دانشجو آمادگی لازم برای کلاس را داشته باشد.
                </p>
            </div>
            <div className="w-[410px] border-2 border-blue-950 relative h-[130px] leading-5">
                <div className="absolute top-[-14px] right-2 text-[10px] bg-blue-950 text-white p-2">حضور و غیاب</div>
                
                <p className="text-[10px] pt-7  text-justify p-5">
                منتور باید برنامه تعداد جلسات و زمان‌های حضور دانشجو را از ابتدا به مدرس اعلام کند تا کلاس‌ها به‌درستی برنامه‌ریزی شود. همچنین اطلاع‌رسانی رودمپ آموزشی دانشجو به مدرسین الزامی است. در صورت غیبت، اطلاع‌رسانی حداقل یک روز قبل الزامی است و در غیر این صورت، جلسه سوخت خواهد شد.
                </p>
            </div>
            <div className="w-[410px] border-2 border-sky-300 relative h-[130px] leading-5">
                <div className="absolute top-[-14px] left-2 text-[10px] text-blue-950 p-2 bg-sky-300">پیش‌نیاز</div>
                
                <p className="text-[10px] pt-7  text-justify p-5">
                برای شرکت در دوره‌ها، داشتن مهارت‌های اولیه کامپیوتری پیشنهاد می‌شود. دانشجویانی که این مهارت‌ها را ندارند، می‌توانند پیش از شروع دوره، در 3 تا 5 جلسه کلاس ICDL شرکت کنند. این مورد برای دانشجویان زیر 15 سال به‌شدت توصیه می‌شود.
                </p>
            </div>
            <div className="w-[410px] border-2 border-blue-950 relative h-[130px] leading-4">
                <div className="absolute top-[-14px] right-2 text-[10px] bg-blue-950 text-white p-2">ایونت‌ها و مسابقات</div>
                
                <p className="text-[10px] pt-7  text-justify p-5">
                پیشنهاد میشود منتورها هنگام ثبت‌نام دانشجویان در ایونت‌ها و مسابقات، سطح دانشجو را بررسی کرده و در صورت تطابق سطح او با الزامات ایونت، اقدام به ثبت‌نام کنند. <br />
                محتوای کلاس‌ها صرفاً در حد آموزش اصول و مهارت‌های موردنیاز در سطح ایونت‌ها خواهد بود و تایم کلاس‌ها برای آماده‌سازی مسابقات صرف نمی‌شود.
                </p>
            </div>
            <div className="w-[410px] border-2 border-sky-300 relative h-[130px] leading-5">
                <div className="absolute top-[-14px] left-2 text-[10px] text-blue-950  p-2 bg-sky-300">رعایت رفتار حرفه‌ای و قوانین</div>
                
                <p className="text-[10px] pt-7  text-justify p-5">
                دانشجویان موظف‌اند چه در کلاس و چه خارج از آن، رفتار حرفه‌ای و احترام‌آمیز داشته باشند. هرگونه مزاحمت، رفتار خارج از عرف یا درخواست‌های نامربوط ممنوع بوده و در صورت مشاهده، با افراد خاطی برخورد خواهد شد.
                </p>
            </div>
            <div className="w-[410px] border-2 border-blue-950 relative h-[130px] leading-5">
                <div className="absolute top-[-14px] right-2 text-[10px] bg-blue-950 text-white p-2">ارتباط با مدرسین</div>
                
                <p className="text-[10px] pt-7  text-justify p-5">
                برای هماهنگی‌ها، ارسال اطلاعات دانشجو و ارتباط با مدرسین، با آیدی aio_star@ در اترباط باشید.
 لطفاً در پیام‌های خود قالب مشخص زیر را رعایت کنید:
<br />
[دوره: ...] | [اسم دانشجو: ...] | [پیام: ...]
                </p>
            </div>
        </div>      
        </>
    );
};
export default Home;