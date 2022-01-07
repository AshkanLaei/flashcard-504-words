Vue.createApp({
	data() {
		return {
			id: 0,
			auto: false,
			meaning: false,
			list: false,
			words: [["Abandon","ترک کردن، رها کردن"],["Keen","تیز، زیرک"],["Jealous","حسود"],["Tact","تدبیر"],["Oath","قسم، سوگند خوردن"],["Vacant","خالی"],["Hardship","بی نوایی"],["Gallant","شجاع"],["Data","اطلاعات، داده ها"],["Unaccustomed","غیرعادی"],["Bachelor","مرد مجرد"],["Qualify","واجد شرایط شدن"],["Corpse","جنازه، جسد"],["Conceal","پنهان کردن، پوشاندن"],["Dismal","غمگین"],["Frigid","خیلی سرد"],["Inhabit","ساکن شدن"],["Numb","بی حس"],["Peril","مخاطره، خطر"],["Recline","تکیه کردن"],["Shriek","جیغ کشیدن"],["Sinister","شیطانی"],["Tempt","وسوسه"],["Wager","شرط بندی"],["Typical","نمونه، معمولی"],["Minimum","حداقل"],["Scarce","کمیاب"],["Annual","سالی یکبار، سالانه"],["Persuade","متقاعد کردن"],["Essential","ضروری"],["Blend","مخلوط کردن"],["Visible","دیدنی"],["Expensive","گران"],["Talent","استعداد"],["Devise","طراحی کردن"],["Wholsale","عمده فروشی"],["Vapor","بخار"],["Eliminate","حذف کردن"],["Villain","آدم شرور، مجرم"],["Dense","فشرده، انبوه"],["Utilize","به کار بردن"],["Humid","مرطوب"],["Theory","تئوری، نظریه"],["Descend","فرود آمدن"],["Circulate","گشتن، دور زدن"],["Enormous","عظیم، بزرگ"],["Predict","پیش بینی کردن"],["Vanish","ناپدید شدن"],["Tradition","سنت"],["Rural","روستایی"],["Burden","مسئولیت سنگین"],["Campus","محوطه دانشگاه یا مدرسه"],["Majority","اکثریت"],["Assemble","تجمع، مونتاژ کردن"],["Explore","بررسی کردن"],["Topic","موضوع"],["Debate","بحث"],["Evade","شانه خالی کردن، فرار کردن"],["Probe","جستجو"],["Reform","اصلاح کردن"],["Approach","نزدیک شدن"],["Detect","متوجه شدن، کشف کردن"],["Defect","نقص"],["Employee","کارمند"],["Neglect","غفلت کردن از"],["Deceive","فریب دادن"],["Undoubtedly","بی تردید"],["Popular","عامه پسند"],["Thorough","تمام عیار"],["Client","موکل، مشتری"],["Comprehensive","جامع، مفصل"],["Defraud","پول گرفتن"],["Postpone","به تعویق انداختن"],["Consent","رضایت دادن"],["Massive","حجیم"],["Capsule","کپسول"],["Preserve","محافظت کردن"],["Denounce","محکوم کردن، انتقاد کردن"],["Unique","منحصر به فرد"],["Torrent","سیلاب"],["Resent","رنجیدن از"],["Molest","آسیب رساندن، حمله کردن"],["Gloomy","تیره تار، تاریکی"],["Unforeseen","غیر مترقبه"],["Exaggerate","مبالغه کردن"],["Amateur","آماتور، ناشی"],["Mediocre","معمولی"],["Variety","گوناگونی، تنوع"],["Valid","معتبر،‌ قانونی"],["Survive","جان سالم به در بردن"],["Weird","عجیب و غریب،‌ مرموز"],["Prominent","مشهور، برجسته"],["Security","امنیت، تضمین"],["Bulky","تنومند، چاق"],["Reluctant","ناراضی"],["Obvious","آشکار، واضح"],["Vicinity","نزدیکی، محله"],["Century","قرن"],["Rage","خشم"],["Document","سند"],["Conclude","پایان دادن، به نتیجه رسیدن"],["Undeniable","غیر قابل انکار"],["Resist","مقاومت کردن در برابر"],["Lack","نیاز، نداشتن"],["Ignore","نادیده گرفتن"],["Challenge","به مبارزه طلبیدن"],["Miniature","مینیاتور، ریز"],["Source","منشا، منبع"],["Excel","بی نظیر بودن"],["Feminine","زنانه"],["Mount","سوار شدن، بالا رفتن"],["Compete","رقابت کردن"],["Dread","هراس، وحشت"],["Masculine","مردانه"],["Menace","تهدید، خطر"],["Tendency","تمایل، گرایش"],["Underestimate","کمتر  از حد برآورد کردن"],["Victorious","فاتح، پیروزمندانه"],["Numerous","متعدد"],["Flexible","انعطاف پذیر"],["Evidence","شهادت، گواه"],["Solitary","آدم گوشه گیر،‌ تنها"],["Vision","دید، خیال"],["Frequent","مکرر"],["Glimpse","نظر اجمالی"],["Recent","اخیر"],["Decade","دهه، دوره ده ساله"],["Hesitate","مکث کردن، اکراه داشتن"],["Absurd","پوچ"],["Conflict","اختلاف"],["Minority","اقلیت، گروه اقلیت"],["Fiction","افسانه، خیال"],["Ignite","آتش گرفتن"],["Abolish","لغو کردن"],["Urban","شهری"],["Population","جمعیت"],["Frank","رک و راست"],["Pollute","آلوده کردن"],["Reveal","آشکار کردن"],["Prohibit","قدغن کردن"],["Urgent","فوری"],["Adequate","کافی"],["Decrease","کاهش دادن"],["Audible","قابل شنیدن، رسا"],["Journalist","روزنامه نگار"],["Famine","قحطی"],["Revive","نیروی تازه گرفتن"],["Commence","شروع کردن"],["Observant","تیز بین"],["Identify","نشان دادن هویت"],["Migrate","مهاجرت کردن"],["Vessel","کشتی، ظرف، آوند"],["Persist","اصرار کردن"],["Hazy","مه رقیق، مه آلود"],["Gleam","نور ضعیف"],["Editor","ویراستار"],["Unruly","عنان گسیخته، سرکش"],["Rival","رقیب"],["Violent","خشن"],["Brutal","وحشیانه"],["Opponent","حریف، رقیب"],["Brawl","کتک کاری"],["Duplicate","کپی کردن"],["Vicious","وحشی، وحشیانه"],["Whirling","چرخش، چرخیدن"],["Underdog","آدم بازنده، توسری خور"],["Thrust","حمله کردن"],["Bewildered","سردرگم کردن"],["Expand","گسترش دادن"],["Alter","اصلاح کردن"],["Mature","بالغ"],["Sacred","مقدس، مذهبی"],["Revise","تجدید نظر کردن، اصلاح کردن"],["Pledge","تعهد"],["Casual","اتفاقی"],["Pursue","تعقیب کردن"],["Unanimous","هم عقیده"],["Fortunate","خوش شانس"],["Pioneer","پیشگام"],["Innovative","ابتکاری"],["Slender","لاغر، کم و اندک"],["Surpass","سبقت گرفتن از"],["Vast","وسیع"],["Doubt","تردید کردن"],["Capacity","گنجایش، ظرفیت"],["Penetrate","نفوذ کردن"],["Pierce","سوراخ کردن"],["Accurate","صحیح، درست"],["Microscope","میکروسکوپ"],["Grateful","سپاسگزار"],["Cautious","محتاط"],["Confident","مطمئن"],["Appeal","علاقه"],["Addict","معتاد"],["Wary","مراقب"],["Aware","آگاه، دانا"],["Misfortune","بدشانس"],["Avoid","اجتناب کردن"],["Wretched","فلاکت بار"],["Keg","بشکه کوچک"],["Nourish","تغذیه کردن"],["Harsh","تند"],["Quantity","مقدار"],["Opt","انتخاب کردن"],["Tragedy","تراژدی"],["Pedestrian","عابر پیاده"],["Glance","نگاه گذرا، نگاهی انداختن"],["Budget","بودجه"],["Nimble","چابک، فرز"],["Manipulate","دستکاری کردن"],["Reckless","بی احتیاط"],["Horrid","ترسناک، مهیب"],["Rave","هذیان گفتن"],["Economical","مقرون به صرفه"],["Lubricate","روغن کاری کردن"],["Ingenious","مبتکر"],["Harvest","درو کردن"],["Abundant","فراوان"],["Uneasy","ناراحت"],["Calculate","محاسبه کردن"],["Absorb","جذب کردن رطوبت یا آب"],["Estimate","محاسبه کردن، قضاوت"],["Morsel","لقمه"],["Quota","سهمیه"],["Threat","تهدید، خطر"],["Ban","منع کردن، ممنوع کردن"],["Panic","سراسیمگی، هول"],["Appropriate","مناسب، درست"],["Emerge","بیرون آمدن"],["Jagged","دندانه دار"],["Linger","باقی ماندن، طول کشیدن"],["Ambush","شبیخون زدن"],["Crafty","ماهر، حرفه ای"],["Defiant","نافرمان"],["Vigor","قدرت، توان"],["Perish","هلاک شدن"],["Fragile","شکستنی"],["Captive","اسیر جنگی، محبوس"],["Prosper","رونق گرفتن"],["Devour","بلعیدن، از چیزی مملو بودن"],["Plea","تقاضا"],["Weary","خسته"],["Collide","تصادف کردن"],["Confirm","تتایید کردن"],["Verify","درباره ی صحت چیزی تحقیق کردن"],["Anticipate","انتظار داشتن"],["Dilemma","دوراهی، تنگنا"],["Detour","راه انحرافی"],["Merit","شایستگی"],["Transmit","انتقال دادن"],["Relieve","تسکین دادن درد"],["Baffle","سر در گم کردن"],["Warden","مسئول، نگهبان"],["Acknowledge","پذیرفتن، به رسمیت شناختن"],["Justice","عدالت"],["Delinquent","بزهکار"],["Reject","نپذیرفتن"],["Deprive","محروم کردن از"],["Spouse","همسر"],["Vocation","حرفه"],["Unstable","ناپایدار، متزلزل"],["Homicide","قتل، قاتل"],["Penalize","اجحاف کردن، ظلم کردن"],["Beneficiary","ذینفع،‌ بهره مند"],["Reptile","جانور خزنده"],["Rerely","به ندرت"],["Forbid","ممنوع کردن"],["Logical","منطقی"],["Exhibit","به نمایش گذاشتن"],["Proceed","پیش رفتن"],["Precaution","احتیاط"],["Extract","بیرون کشیدن"],["Prior","قبلی، قبل از"],["Embrace","آغوش، بغل"],["Valiant","شجاع"],["Partial","نسبی، نا تمام"],["Fierce","خشن و وحشی"],["Detest","متنفر بودن"],["Sneer","ریشخند کردن"],["Scowl","اخم کردن"],["Encourage","تشویق کردن"],["Consider","درباره چیزی فکر کردن"],["Vermin","آفات جانوری"],["Wail","شیون کردن"],["Symbol","نماد"],["Authority","قدرت، مقتدر"],["Neutral","بی طرف"],["Trifle","امر جزئی"],["Architect","معمار"],["Matrimony","ازدواج"],["Baggage","اسباب سفر"],["Squander","ضایع کردن"],["Abroad","به کشور دیگر، خارج از کشور"],["Fugitive","فراری"],["Calamity","مصیبت"],["Pauper","فقیر، مسکین"],["Envy","حسادت، حسادت ورزیدن"],["Collapse","فروپاشی، شکست"],["Prosecute","وکالت شاکی را به عهده گرفتن"],["Bigamy","داشتن دو همسر همزمان"],["Possible","احتمال، ‌امکان"],["Compel","مجبور کردن"],["Awkward","دست و پا چلفتی، شرمسارانه"],["Venture","به خطر انداختن، جرات کردن"],["Awesome","ترسناک، عالی"],["Guide","راهنما"],["Quench","خاموش کردن، عطش را فرو نشاندن"],["Betray","نارو زدن، لو دادن"],["Utter","بر زبان آوردن"],["Pacify","آرام کردن"],["Respond","پاسخ دادن، واکنش نشان دادن"],["Beckon","با اشاره فرا خواندن"],["Despite","بر خلاف، با وجود اینکه"],["Disrupt","متلاشی کردن"],["Rash","جوش، عجولانه"],["Rapid","سریع"],["Exhaust","تا ته مصرف کردن، خسته کردن"],["Severity","شدت"],["Feeble","ضعیف"],["Unite","متحد کردن، یکی کردن"],["Cease","متوقف کردن"],["Thrifty","صرفه جو"],["Miserly","خسیس"],["Monarch","فرمانروای مطلق"],["Outlaw","قانون شکن"],["Promote","ترفیع دادن، ایجاد کردن"],["Undernourished","سوء تغذیه"],["Illustrate","با مثال توضیح دادن"],["Disclose","فاش کردن"],["Excessive","بیش از حد"],["Disaster","فاجعه"],["Censor","سانسورچی، سانسور کردن"],["Culprit","مجرم"],["Juvenile","نوجوان"],["Bait","طعمه"],["Insist","تاکید کردن، اصرار کردن"],["Toil","زحمت"],["Blunder","اشتباه بزرگ، اشتباه کردن"],["Daze","مبهوت کردن"],["Mourn","سوگواری کردن"],["Subside","فروکشی کردن"],["Maim","علیل کردن"],["Comprehend","قهمیدن"],["Commend","تحسین کردن"],["Final","نهایی، قطعی"],["Exempt","معاف کردن، معاف"],["Vain","مغرور، بیهوده"],["Repetition","تکرار"],["Depict","تصویر کردن، شرح دادن"],["Motal","فناپذیر، مهلک"],["Novel","نوین، جدید، رمان"],["Occupant","ساکن، مقیم"],["Appoint","منصوب کردن، مقرر کردن"],["Quarter","محل سکونت، اسکان دادن"],["Site","محل"],["Quote","نقل قول کردن، قیمت دادن"],["Verse","آیه، بیت"],["Morality","اخلاقیات"],["Roam","پرسه زدن"],["Attract","جذب کردن"],["Commuter","مسافر هر روزه"],["Confine","محبوس کردن"],["Idle","بیکار، تنبل"],["Idol","بت، محبوب"],["Jest","شوخی کردن، شوخی"],["Patriotic","میهنی، میهن پرستانه"],["Dispute","مخالفت، جر و بحث"],["Valor","شجاعت"],["Lunatic","احمق"],["Vein","سیاهرگ، رگه"],["Uneventful","بی حادثه، بدون رویداد مهم"],["Fertile","بارور شده، حاصلخیز"],["Refer","اشاره کردن، ارجاع کردن"],["Distress","درماندگی،‌ مخمصه"],["Diminish","کاهش دادن، تضعیف کردن"],["Maximum","حداکثر"],["Flee","فرار کردن"],["Vulnerable","آسیب پذیر، حساس"],["Signify","معنی دادن، مهم بودن"],["Mythology","اسطوره شناسی"],["Colleague","همکار"],["Torment","درد و رنج، عذاب دادن"],["Provide","تامین کردن"],["Loyalty","وفاداری"],["Volunteer","داوطلب"],["Prejudice","پیش داوری، لطمه"],["Shrill","گوش خراش"],["Jolly","شاد، خوش"],["Witty","شوخ"],["Hinder","به تاخیر انداختن"],["Lecture","تدریس، نصیحت"],["Abuse","خشونت کردن، سوء استفاده کردن"],["Mumble","من من کردن"],["Mute","خاموش، بی صدا"],["Wad","گلوله پنبه، دسته"],["Retain","حفظ کردن، وکیل گرفتن"],["Candidate","کاندیدا، نامزد"],["Precede","مقدم بودن بر"],["Adolescent","نوجوان"],["Coeducational","مدرسه یا دانشگاه مختلط"],["Radical","ریشه ای، افراطی، تندرو"],["Spontaneous","خودبخود،‌خودجوش"],["Skim","از روی چیزی گذشتن"],["Vaccinate","واکسن زدن"],["Untidy","نامرتب"],["Utensil","ابزار"],["Sensitive","حساس، زود رنج"],["Temperate","معتدل"],["Vague","مبهم، دو پهلو"],["Elevate","بلند کردن، ارتقاع دادن"],["Lottery","بخت آزمایی"],["Finance","امور مالی"],["Obtain","به دست آوردن"],["Cinema","سینما"],["Event","اتفاق، مسابقه"],["Discard","دور انداختن"],["Soar","اوج گرفتن"],["Subsequent","بعدی"],["Relate","گفتن، ربط دادن"],["Stationary","ثابت"],["Prompt","باعث شدن"],["Hasty","شتابزده،‌عجول"],["Scorch","جای سوختگی"],["Tempest","توفان"],["Soothe","آرام کردن، تسکین دادن"],["Sympathetic","همدرد"],["Redeem","باز خریدن، جبران کردن"],["Resume","از سر گرفتن"],["Harmony","سازگار"],["Refrain","برگردان، خودداری کردن"],["Illegal","بر خلاف قانون"],["Narcotic","ماده مخدر"],["Heir","وارث"],["Majestic","با عظمت"],["Dwindle","به تدریج ضعیف شدن"],["Surplus","مازاد"],["Traitor","خائن"],["Deliberate","تعمق کردن"],["Vandal","آدم خرابکار"],["Drought","خشکسالی"],["Abide","تحمل کردن"],["Unify","با هم متحد شدن"],["Summit","اوج، قله"],["Heed","توجه کردن به"],["Biography","شرح حال"],["Drench","خیس کردن"],["Swarm","گله"],["Wobble","لرزیدن، لرزش"],["Tumult","غوغا"],["Kneel","زانو زدن"],["Dejected","افسرده"],["Obedient","مطیع"],["Recede","عقب رفتن"],["Tyrant","ظالم"],["Charity","صدقه، بخشش، خیریه"],["Verdict","رای، عقیده"],["Unearth","از زیر خاک بیرون کشیدن"],["Depart","ترک کردن، فوت کردن"],["Coincide","همزمان بودن"],["Cancel","باطل کردن"],["Debtor","بدهکار"],["Legible","خوانا"],["Placard","پلاکارد"],["Contagious","مسری، واگیر"],["Clergy","روحانیت"],["Customary","مرسوم،‌رایج"],["Transparent","واضح،‌شفاف"],["Scald","سوزاندن، سوختگی"],["Epidemic","همه گیر"],["Obesity","فربهی، چاقی"],["Magnify","بزرگ کردن"],["Chiropractor","پزشک متخصص دست یا پا"],["Obstacle","مانع"],["Ventilate","تهویه"],["Jeopardize","به خطر انداختن"],["Negative","منفی"],["Pension","مستمری، حقوق بازنشستگی"],["Vital","ضروری، حیاتی"],["Municipal","مربوط به شهرداری، شهری"],["Oral","شفاهی، دهانی"],["Complacent","از خود راضی"],["Wasp","زنبور بدون عسل"],["Rehabilitate","توان بخشیدن،‌بازسازی کردن"],["Parole","آزادی مشروط، قول شرف"],["Vertical","عمودی"],["Multitude","فراوانی، جمعیت"],["Nominate","نامزد مقامی کردن"],["Potential","بالقوه"],["Morgue","سردخانه"],["Preoccupied","مشغول و نگران"],["Upholstery","رویه"],["Indifference","بی توجهی"],["Maintain","حفظ کردن، تامین کردن"],["Snub","بی اعتنایی کردن"],["Endure","تحمل کردن، دوام آوردن"],["Wrath","خشم"],["Expose","فاش کردن"],["Legend","افسانه،‌اسطوره"],["Ponder","به فکر فرو رفتن"],["Resign","استعفا دادن، تسلیم شدن"],["Drastic","اساسی، بنیادی"],["Wharf","اسکله"],["Amend","اصلاح کردن"],["ballot","برگه رای"]]
		}
	},
	computed: {
		btnText() {
			if (this.meaning) return "پنهان‌سازی معنی"
			else return "نمایش معنی"
		}
	},
	watch: {
		id() { this.meaning = this.auto }
	}
}).mount('#root')
