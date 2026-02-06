// ============================================
// نظام معالجة الأخطاء
// ============================================

class ErrorHandler {
    static showError(message, error = null) {
        console.error(message, error);
        
        const errorModal = document.getElementById('errorModal');
        const errorMessage = document.getElementById('errorMessage');
        
        errorMessage.textContent = message + (error ? `: ${error.message}` : '');
        errorModal.hidden = false;
        
        const closeBtn = document.getElementById('closeErrorBtn');
        closeBtn.onclick = () => errorModal.hidden = true;
        
        errorModal.onclick = (e) => {
            if (e.target === errorModal) errorModal.hidden = true;
        };
        
        announceToScreenReader(`حدث خطأ: ${message}`);
    }
    
    static wrapFunction(func, context) {
        return function(...args) {
            try {
                return func.apply(this, args);
            } catch (error) {
                ErrorHandler.showError(`خطأ في ${context}`, error);
                return null;
            }
        };
    }
}

// ============================================
// قاعدة بيانات الأسئلة
// ============================================

const quizQuestions = [
            // الأخطاء النحوية (1-10)
            {
                id: 1,
                type: 'multiple',
                question: 'الصواب في استخدام "ال" مع كلمة "غير" هو قول:',
                options: [
                    'الغير مناسب',
                    'غير المناسب',
                    'غير مناسباً'
                ],
                answer: 'غير المناسب',
                explanation: 'كلمة "غير" اسم ملازم للإضافة، فلا تقبل "ال" التعريف'
            },
            {
                id: 2,
                type: 'truefalse',
                question: 'يُعد تعبير "حاز على الجائزة" تعبيراً صحيحاً فصيحاً.',
                answer: 'خطأ',
                explanation: 'الصواب: "حاز الجائزة" لأن الفعل "حاز" لا يتعدى بحرف الجر'
            },
            {
                id: 3,
                type: 'multiple',
                question: 'عند استخدام "كلما" في جملة الشرط، الصواب هو:',
                options: [
                    'تكرارها (كلما... كلما)',
                    'ذكرها مرة واحدة في البداية',
                    'حذفها تماماً'
                ],
                answer: 'ذكرها مرة واحدة في البداية'
            },
            {
                id: 4,
                type: 'truefalse',
                question: 'يُقال "اعتاد على التفوق" والصواب نحويًا "اعتاد التفوق".',
                answer: 'صح'
            },
            {
                id: 5,
                type: 'multiple',
                question: 'الصواب في الفعل "استبدل" هو أن تدخل الباء على:',
                options: [
                    'الشيء المأخوذ',
                    'الشيء المتروك (القديم)',
                    'الفاعل'
                ],
                answer: 'الشيء المتروك (القديم)'
            },
            {
                id: 6,
                type: 'truefalse',
                question: 'يُعد قول "أجرى الباحث دراساتٍ معمقةٍ" صحيحاً بتنوين الكسر في "معمقة".',
                answer: 'خطأ',
                explanation: 'الصواب: "معمقةً" (تنوين النصب لأنها حال)'
            },
            {
                id: 7,
                type: 'multiple',
                question: 'يُقال في الأخبار "كشفت مصادر عن اعتزام..." والصواب:',
                options: [
                    'كشفت مصادر اعتزام',
                    'كشفت مصادر باعتزام',
                    'كشفت مصادر في اعتزام'
                ],
                answer: 'كشفت مصادر باعتزام'
            },
            {
                id: 8,
                type: 'truefalse',
                question: 'تعبير "بالرغم من" يُفضل استبداله بكلمة "رغم" أو "على الرغم".',
                answer: 'صح'
            },
            {
                id: 9,
                type: 'multiple',
                question: 'عند نداء الأسماء، يُقال:',
                options: [
                    'يسمى ماجدٌ',
                    'يسمى ماجداً',
                    'يسمى ماجدٍ'
                ],
                answer: 'يسمى ماجداً'
            },
            {
                id: 10,
                type: 'truefalse',
                question: 'كلمة "غير" لا تقبل "ال" التعريف لأنها اسم ملازم للإضافة.',
                answer: 'صح'
            },

            // الإعراب والبناء (11-20)
            {
                id: 11,
                type: 'multiple',
                question: 'العلم الذي يبحث في أصول تركيب الجملة وتفاعل الكلمات داخلها هو:',
                options: [
                    'الصرف',
                    'النحو',
                    'الدلالة'
                ],
                answer: 'النحو'
            },
            {
                id: 12,
                type: 'truefalse',
                question: 'جميع الحروف في اللغة العربية مبنية دائماً.',
                answer: 'صح'
            },
            {
                id: 13,
                type: 'multiple',
                question: '"البناء" هو لزوم اللفظ حالة واحدة لا تتغير مهما اختلف موقعه في:',
                options: [
                    'المعجم',
                    'الجملة',
                    'البيت الشعري'
                ],
                answer: 'الجملة'
            },
            {
                id: 14,
                type: 'truefalse',
                question: 'الفعل الماضي مبني دائماً.',
                answer: 'صح'
            },
            {
                id: 15,
                type: 'multiple',
                question: 'تُقدر الحركات الإعرابية للثقل في الفعل المنتهي بـ:',
                options: [
                    'الألف',
                    'الياء أو الواو',
                    'الهمزة'
                ],
                answer: 'الياء أو الواو'
            },
            {
                id: 16,
                type: 'truefalse',
                question: 'الإعراب المحلي خاص بالجمل وشبه الجمل.',
                answer: 'صح'
            },
            {
                id: 17,
                type: 'multiple',
                question: 'علامة الرفع الفرعية في الأسماء الخمسة هي:',
                options: [
                    'الألف',
                    'الواو',
                    'ثبوت النون'
                ],
                answer: 'الواو'
            },
            {
                id: 18,
                type: 'truefalse',
                question: 'الجر خاص بالأسماء والجزم خاص بالأفعال.',
                answer: 'صح'
            },
            {
                id: 19,
                type: 'multiple',
                question: 'يُبنى الفعل المضارع إذا اتصلت به:',
                options: [
                    'نون النسوة أو نون التوكيد',
                    'تاء الفاعل',
                    'ألف الاثنين'
                ],
                answer: 'نون النسوة أو نون التوكيد'
            },
            {
                id: 20,
                type: 'truefalse',
                question: 'النحو الحديث يعتبر الجملة التي فيها فعل "جملة فعلية" بغض النظر عن موقعه.',
                answer: 'صح'
            },

            // الممنوع من الصرف (21-30)
            {
                id: 21,
                type: 'multiple',
                question: 'الممنوع من الصرف هو الاسم الذي:',
                options: [
                    'لا يُنون ويُجر بالكسرة',
                    'لا يُنون ويُجر بالفتحة',
                    'يُنون ويُجر بالفتحة'
                ],
                answer: 'لا يُنون ويُجر بالفتحة'
            },
            {
                id: 22,
                type: 'truefalse',
                question: 'يُمنع العلم من الصرف إذا كان "مفرداً" (غير مضاف ولا معرف بـ ال).',
                answer: 'صح'
            },
            {
                id: 23,
                type: 'multiple',
                question: 'يُجر الممنوع من الصرف بالكسرة إذا:',
                options: [
                    'كان نكرة',
                    'عُرف بـ "ال" أو أُضيف',
                    'كان علماً أعجمياً'
                ],
                answer: 'عُرف بـ "ال" أو أُضيف'
            },
            {
                id: 24,
                type: 'truefalse',
                question: 'كلمة "بغداد" تمنع من الصرف لأنها علم أعجمي أو مؤنث زائد عن 3 أحرف.',
                answer: 'صح'
            },
            {
                id: 25,
                type: 'multiple',
                question: 'الأسماء (عثمان، مهدان، سكران) منعت من الصرف لوجود:',
                options: [
                    'الهمزة',
                    'الألف والنون الزائدتين',
                    'التضعيف'
                ],
                answer: 'الألف والنون الزائدتين'
            },
            {
                id: 26,
                type: 'truefalse',
                question: 'يُمنع العلم "أحمد" من الصرف لأنه على وزن الفعل.',
                answer: 'صح'
            },
            {
                id: 27,
                type: 'multiple',
                question: 'صيغ منتهى الجموع هي كل جمع تكسير بعد ألف تكسيره:',
                options: [
                    'حرف واحد',
                    'حرفان أو ثلاثة',
                    'أربعة أحرف'
                ],
                answer: 'حرفان أو ثلاثة'
            },
            {
                id: 28,
                type: 'truefalse',
                question: 'الاسم المقصور (مثل ليلى) لا يتأثر بنظرية المفرد لأن حركته مقدرة للتعذر.',
                answer: 'صح'
            },
            {
                id: 29,
                type: 'multiple',
                question: 'تمنع الصفة على وزن "أفعل" من الصرف مثل:',
                options: [
                    'كريم',
                    'أحسن',
                    'عظيم'
                ],
                answer: 'أحسن'
            },
            {
                id: 30,
                type: 'truefalse',
                question: 'كلمة "عُمر" تمنع من الصرف لأنها علم معدول عن "عامر" حسب النحاة.',
                answer: 'صح'
            },

            // إن وأخواتها (31-40)
            {
                id: 31,
                type: 'multiple',
                question: '"ليت" حرف مركب من:',
                options: [
                    'لـ + أيت',
                    'لا + أيت',
                    'لن + أيت'
                ],
                answer: 'لـ + أيت'
            },
            {
                id: 32,
                type: 'truefalse',
                question: 'إن وأخواتها تدخل على الجملة الاسمية فتنصب الخبر..',
                answer: 'خطأ',
                explanation: 'تنصب المبتدأ  '
            },
            {
                id: 33,
                type: 'multiple',
                question: '"لعل" حرف ناسخ أصله اللغوي:',
                options: [
                    'لـ + عل',
                    'لن + عل',
                    'لا + عل'
                ],
                answer: 'لـ + عل'
            },
            {
                id: 34,
                type: 'truefalse',
                question: 'يجوز تقديم خبر "إن" على اسمها إذا كان شبه جملة.',
                answer: 'صح'
            },
            {
                id: 35,
                type: 'multiple',
                question: 'نون الوقاية تدخل على "ليت" فيُقال غالباً:',
                options: [
                    'ليتي',
                    'ليتني',
                    'ليتنني'
                ],
                answer: 'ليتني'
            },
            {
                id: 36,
                type: 'truefalse',
                question: '"كأن" مركبة من كاف التشبيه و"أنّ".',
                answer: 'صح'
            },
            {
                id: 37,
                type: 'multiple',
                question: 'خبر إن في قوله {إن مع العسر يسراً} هو:',
                options: [
                    'يسراً',
                    'مع العسر (شبه جملة)',
                    'ضمير مستتر'
                ],
                answer: 'مع العسر (شبه جملة)'
            },
            {
                id: 38,
                type: 'truefalse',
                question: '"لكنّ" مركبة من "لا" و"كأن".',
                answer: 'خطأ',
                explanation: 'مركبة من أداة تنبيه + إن'
            },
            {
                id: 39,
                type: 'multiple',
                question: 'تعمل إن وأخواتها في الجملة:',
                options: [
                    'الفعلية',
                    'الاسمية',
                    'شبه الجملة'
                ],
                answer: 'الاسمية'
            },
            {
                id: 40,
                type: 'truefalse',
                question: 'يجوز في اللغة "إني" و"إنني" حسب اختلاف اللهجات.',
                answer: 'صح'
            },

            // نظام التعدية في النحو العربي (41-50)
            {
                id: 41,
                type: 'multiple',
                question: 'الفعل الذي يكتفي بفاعله ولا يحتاج لمفعول به يسمى:',
                options: [
                    'متعدياً',
                    'لازماً',
                    'ناقصاً'
                ],
                answer: 'لازماً'
            },
            {
                id: 42,
                type: 'truefalse',
                question: 'يمكن تعدية الفعل اللازم بزيادة همزة في أوله (مثل: أكرم).',
                answer: 'صح'
            },
            {
                id: 43,
                type: 'multiple',
                question: 'الفعل "أعلم" يتعدى لـ:',
                options: [
                    'مفعول واحد',
                    'مفعولين',
                    'ثلاثة مفاعيل'
                ],
                answer: 'ثلاثة مفاعيل'
            },
            {
                id: 44,
                type: 'truefalse',
                question: 'حروف التعدية في اللغة السبئية القديمة هي "الهاء" مثل (هريقوا).',
                answer: 'صح'
            },
            {
                id: 45,
                type: 'multiple',
                question: 'الفعل "رأى" ينصب مفعولين إذا كانت الرؤية:',
                options: [
                    'بصرية حسية',
                    'قلبية ذهنية',
                    'منامية'
                ],
                answer: 'قلبية ذهنية'
            },
            {
                id: 46,
                type: 'truefalse',
                question: 'الشين هي حرف التعدية في اللغة الحضرمية والأكدية.',
                answer: 'صح'
            },
            {
                id: 47,
                type: 'multiple',
                question: 'أفعال التحويل (مثل: جعل، صيّر) تنصب:',
                options: [
                    'مفعولاً واحداً',
                    'مفعولين أصلهما مبتدأ وخبر',
                    'لا تنصب مفاعيل'
                ],
                answer: 'مفعولين أصلهما مبتدأ وخبر'
            },
            {
                id: 48,
                type: 'truefalse',
                question: 'الفعل "حاز" يتعدى بنفسه ولا يحتاج لحرف الجر "على".',
                answer: 'صح'
            },
            {
                id: 49,
                type: 'multiple',
                question: 'وسيلة التعدية في "درّس" هي:',
                options: [
                    'الهمزة',
                    'التضعيف (تشديد العين)',
                    'زيادة الألف'
                ],
                answer: 'التضعيف (تشثير العين)'
            },
            {
                id: 50,
                type: 'truefalse',
                question: 'الفعل "وجد" ينصب مفعولين إذا كان بمعنى "عثر على شيء مادي".',
                answer: 'خطأ',
                explanation: 'في هذه الحالة يعرب الثاني حالاً وليس مفعولاً ثانياً'
            },

            // الأخطاء الدلالية (51-60)
            {
                id: 51,
                type: 'multiple',
                question: 'كلمة "توأم" في اللغة تعني:',
                options: [
                    'فرداً واحداً',
                    'اثنين',
                    'ثلاثة'
                ],
                answer: 'اثنين'
            },
            {
                id: 52,
                type: 'truefalse',
                question: 'قول "امرأة تنجب توأمين" يعني أنها أنجبت أربعة أطفال.',
                answer: 'صح'
            },
            {
                id: 53,
                type: 'multiple',
                question: '"معنى المعنى" للفعل "ضرب" في (ضرب في الأرض) هو:',
                options: [
                    'أوجع',
                    'سافر',
                    'خفق'
                ],
                answer: 'سافر'
            },
            {
                id: 54,
                type: 'truefalse',
                question: 'يُعد تعبير "الأحبال الصوتية" صحيحاً دلالياً.',
                answer: 'خطأ',
                explanation: 'الصواب: "الوتران الصوتيان"'
            },
            {
                id: 55,
                type: 'multiple',
                question: 'المثلثات اللغوية (مثل قَسط، قِسط، قُسط) يتغير معناها بتغير:',
                options: [
                    'عدد حروفها',
                    'حركتها الإعرابية',
                    'ترتيب حروفها'
                ],
                answer: 'حركتها الإعرابية'
            },
            {
                id: 56,
                type: 'truefalse',
                question: 'الحشو هو زيادة في المبنى لا يقابلها زيادة في المعنى.',
                answer: 'صح'
            },
            {
                id: 57,
                type: 'multiple',
                question: 'تعبير "التهاني القلبية" يُعد من قبيل:',
                options: [
                    'الإيجاز',
                    'الحشو',
                    'التفاصح'
                ],
                answer: 'الحشو'
            },
            {
                id: 58,
                type: 'truefalse',
                question: 'قولنا "تعادل الفريقان بهدفين لكل منهما" يحتوي على حشو.',
                answer: 'صح'
            },
            {
                id: 59,
                type: 'multiple',
                question: 'الصواب في ترجمة "I am as a writer" هو:',
                options: [
                    'أنا ككاتب',
                    'أنا بصفتي كاتباً',
                    'أنا مثل كاتب'
                ],
                answer: 'أنا بصفتي كاتباً'
            },
            {
                id: 60,
                type: 'truefalse',
                question: 'كلمة "قَسط" بفتح القاف تعني العدل.',
                answer: 'خطأ',
                explanation: 'تعني الظلم (قِسط بكسر القاف تعني العدل)'
            },

            // التفاصح (61-70)
            {
                id: 61,
                type: 'multiple',
                question: 'التفاصح هو ظاهرة لغوية ناتجة عن:',
                options: [
                    'الجهل باللغة',
                    'توهم المتكلم أن لغته غير فصيحة فيحاول "تفصيحها" خطأً',
                    'الرغبة في التحدث بالعامية'
                ],
                answer: 'توهم المتكلم أن لغته غير فصيحة فيحاول "تفصيحها" خطأً'
            },
            {
                id: 62,
                type: 'truefalse',
                question: 'نطق "السين" ثاءً (مثل: يتثنى بدلاً من يتسنى) يُعد من التفاصح الصوتي.',
                answer: 'صح'
            },
            {
                id: 63,
                type: 'multiple',
                question: 'من التفاصح الصرفي "همز ما لا يهمز" مثل قول:',
                options: [
                    'مارب',
                    'مأرب',
                    'ميرب'
                ],
                answer: 'مأرب'
            },
            {
                id: 64,
                type: 'truefalse',
                question: 'الصواب في وصف الشريعة قولنا "الشريعة السمحاء".',
                answer: 'خطأ',
                explanation: 'الصواب: "السمحة" لأن صيغة فعلى للمبالغة لا تصلح للعلم المؤنث'
            },
            {
                id: 65,
                type: 'multiple',
                question: 'القاعدة في العدد (11-19) هي البناء على:',
                options: [
                    'السكون',
                    'فتح الجزأين',
                    'الضم'
                ],
                answer: 'فتح الجزأين'
            },
            {
                id: 66,
                type: 'truefalse',
                question: 'جر الممنوع من الصرف بالكسرة (مثل: في مناطقٍ) يُعد من أخطاء التفاصح.',
                answer: 'صح'
            },
            {
                id: 67,
                type: 'multiple',
                question: 'نطق "مشايخ" بالهمزة "مشائخ" هو:',
                options: [
                    'صواب فصيح',
                    'خطأ تفاصحي',
                    'لهجة قديمة'
                ],
                answer: 'خطأ تفاصحي'
            },
            {
                id: 68,
                type: 'truefalse',
                question: 'التفاصح قد يكون في النطق وقد يكون في الكتابة.',
                answer: 'صح'
            },
            {
                id: 69,
                type: 'multiple',
                question: 'نطق "الزاي" ذالاً (مثل: ذبيب بدلاً من زبيب) هو خطأ:',
                options: [
                    'نحوي',
                    'صوتي',
                    'دلالي'
                ],
                answer: 'صوتي'
            },
            {
                id: 70,
                type: 'truefalse',
                question: 'الصواب هو "مشايخ" و"معايب" و"مصايد" بالياء لا بالهمزة.',
                answer: 'صح'
            },

            // مقدمة (تاريخ التدوين) (71-80)
            {
                id: 71,
                type: 'multiple',
                question: 'تدوين القرآن وصناعة المصحف في عهد عثمان بن عفان كان في عام:',
                options: [
                    '15 هـ',
                    '25 هـ',
                    '35 هـ'
                ],
                answer: '25 هـ'
            },
            {
                id: 72,
                type: 'truefalse',
                question: 'يُعتبر تدوين القرآن أعظم مشروع استراتيجي لأنه حفظ النص من التحريف.',
                answer: 'صح'
            },
            {
                id: 73,
                type: 'multiple',
                question: 'مخترعو الكتابة الأوائل هم:',
                options: [
                    'الفينيقيون',
                    'السومريون (الشومريون)',
                    'الرومان'
                ],
                answer: 'السومريون (الشومريون)'
            },
            {
                id: 74,
                type: 'truefalse',
                question: '"الشومريون" هم قبائل يمنية هاجرت واستوطنت العراق.',
                answer: 'صح'
            },
            {
                id: 75,
                type: 'multiple',
                question: 'اعتمدت لجنة تدوين المصحف لغة:',
                options: [
                    'تميم',
                    'قريش',
                    'حمير'
                ],
                answer: 'قريش'
            },
            {
                id: 76,
                type: 'truefalse',
                question: 'نظام الإملاء في المصحف كان مزيجاً من الإملاء اليمني والعراقي السوري.',
                answer: 'صح'
            },
            {
                id: 77,
                type: 'multiple',
                question: 'اقترح المصدر مصطلح "اللغات النوحية" كبديل لمصطلح:',
                options: [
                    'اللغات السامية',
                    'اللغات الحامية',
                    'اللغات الآرية'
                ],
                answer: 'اللغات السامية'
            },
            {
                id: 78,
                type: 'truefalse',
                question: 'كانت نسبة الأمية في المجتمعات القديمة قبل الإسلام تتجاوز 80%.',
                answer: 'صح'
            },
            {
                id: 79,
                type: 'multiple',
                question: 'المرحلة الأولى من مراحل الكتابة هي:',
                options: [
                    'الرموز',
                    'التصوير',
                    'المقاطع'
                ],
                answer: 'التصوير'
            },
            {
                id: 80,
                type: 'truefalse',
                question: 'الخط العربي في أصله مأخوذ من الخط الآرامي النبطي.',
                answer: 'صح'
            },

            // الإملاء وعلوم اللغة (81-90)
            {
                id: 81,
                type: 'multiple',
                question: 'تكتب الهمزة المتوسطة قبل الضمير على الواو (مثل: أصدقاؤنا) في حالة:',
                options: [
                    'النصب',
                    'الرفع',
                    'الجر'
                ],
                answer: 'الرفع'
            },
            {
                id: 82,
                type: 'truefalse',
                question: 'يتحدد شكل الألف في نهاية الفعل (ممدودة أو مقصورة) بحسب أصله الصرفي.',
                answer: 'صح'
            },
            {
                id: 83,
                type: 'multiple',
                question: 'القاعدة "الذهبية" الأولى في الإملاء هي اعتماد شكل الحرف بناءً على:',
                options: [
                    'طول الكلمة',
                    'الحركة الأقوى',
                    'نوع الحبر'
                ],
                answer: 'الحركة الأقوى'
            },
            {
                id: 84,
                type: 'truefalse',
                question: 'تُحذف ياء الاسم المنقوص (مثل: قاضٍ) إذا كان "مفرداً" في حالتي الرفع والجر.',
                answer: 'صح'
            },
            {
                id: 85,
                type: 'multiple',
                question: 'تُرسم الألف ممدودة "علوية" (مثل: دنا) إذا كان أصلها:',
                options: [
                    'ياءً',
                    'واواً',
                    'ألفاً'
                ],
                answer: 'واواً'
            },
            {
                id: 86,
                type: 'truefalse',
                question: 'يفرق الإملاء دلالياً بين "ندا" (مذكر) و"ندى" (مؤنث).',
                answer: 'صح'
            },
            {
                id: 87,
                type: 'multiple',
                question: 'قاعدة "كراهة توالي الأمثال" تعني منع كتابة:',
                options: [
                    'حرفين مختلفين',
                    'حرفين متطابقين متتاليين',
                    'أكثر من ثلاث كلمات'
                ],
                answer: 'حرفين متطابقين متتاليين'
            },
            {
                id: 88,
                type: 'truefalse',
                question: 'تُرسم الهمزة المتوسطة على السطر (مثل: أصدقاءنا) في حالة النصب.',
                answer: 'صح'
            },
            {
                id: 89,
                type: 'multiple',
                question: 'الحركة الأقوى في سلم الحركات الإملائية هي:',
                options: [
                    'الضمة',
                    'الكسرة',
                    'الفتحة'
                ],
                answer: 'الكسرة'
            },
            {
                id: 90,
                type: 'truefalse',
                question: 'علم الدلالة يساعد في التمييز بين "عَال" (مفرد) و"عُلى" (جمع) إملائياً.',
                answer: 'صح'
            },

            // مشكلات الإملاء في اللغة العربية (91-100)
            {
                id: 91,
                type: 'multiple',
                question: 'أكبر معضلة في الإملاء العربي هي:',
                options: [
                    'حرف الميم',
                    'الهمزة',
                    'اللام القمرية'
                ],
                answer: 'الهمزة'
            },
            {
                id: 92,
                type: 'truefalse',
                question: 'أضيفت الألف في كلمة "مائة" قديماً لتمييزها عن كلمات مثل "فئة" قبل اختراع النقط.',
                answer: 'صح'
            },
            {
                id: 93,
                type: 'multiple',
                question: 'يُقترح في الإملاء الحديث كتابة "مئة" بدون ألف لـ:',
                options: [
                    'تحقيق التوافق بين النطق والمكتوب',
                    'اختصار الوقت',
                    'تجميل الخط'
                ],
                answer: 'تحقيق التوافق بين النطق والمكتوب'
            },
            {
                id: 94,
                type: 'truefalse',
                question: 'من مشكلات الإملاء رسم الحرف الواحد بأكثر من شكل كالهمزة.',
                answer: 'صح'
            },
            {
                id: 95,
                type: 'multiple',
                question: 'أول من فطن لقانون "توالي الأمثال" في الخط هو:',
                options: [
                    'سيبويه',
                    'ابن درستويه',
                    'الفراء'
                ],
                answer: 'الفراء'
            },
            {
                id: 96,
                type: 'truefalse',
                question: 'ازدواجية اللغة بين الفصحى والعامية تؤدي لخلط المتعلمين بين الأصوات المتشابهة.',
                answer: 'صح'
            },
            {
                id: 97,
                type: 'multiple',
                question: 'وضع الخليل بن أحمد رمز الهمزة لتحقيق:',
                options: [
                    'التباعد بين الكلمات',
                    'التطابق بين الكتابة والنطق',
                    'سرعة الكتابة'
                ],
                answer: 'التطابق بين الكتابة والنطق'
            },
            {
                id: 98,
                type: 'truefalse',
                question: 'المجمع اللغوي السوري يرى وجوب مطابقة المنطوق للمكتوب ما أمكن.',
                answer: 'صح'
            },
            {
                id: 99,
                type: 'multiple',
                question: 'يكتب المصريون الألف المقصورة "ياءً منقوطة" (مثل: علي) وهذا ناتج عن:',
                options: [
                    'نظام المخطوطات القديم',
                    'قاعدة حديثة',
                    'خطأ مطبعي'
                ],
                answer: 'نظام المخطوطات القديم'
            },
            {
                id: 100,
                type: 'truefalse',
                question: 'تُحذف همزة الوصل خطاً في "البسملة" الكاملة فقط.',
                answer: 'صح'
            },

            // أنواع الرسم العربي (101-110)
            {
                id: 101,
                type: 'multiple',
                question: 'الرسم الذي لا يجوز المساس به أو تعديله هو:',
                options: [
                    'الرسم الإملائي الحديث',
                    'الرسم القرآني (العثماني)',
                    'رسم المخطوطات العلمية'
                ],
                answer: 'الرسم القرآني (العثماني)'
            },
            {
                id: 102,
                type: 'truefalse',
                question: 'الرسم القرآني "موقوف" وتراث أمة وكتاب عقيدة.',
                answer: 'صح'
            },
            {
                id: 103,
                type: 'multiple',
                question: 'كلمة "يأيها" تُكتب في المصحف:',
                options: [
                    'منفصلة (يا أيها)',
                    'متصلة (يأيها)',
                    'بدون ألف'
                ],
                answer: 'متصلة (يأيها)'
            },
            {
                id: 104,
                type: 'truefalse',
                question: 'أفتى الإمام مالك بمنع كتابة المصحف على ما أحدثه الناس من قواعد هجاء.',
                answer: 'صح'
            },
            {
                id: 105,
                type: 'multiple',
                question: 'الفرق بين الرسمين يظهر في حذف أو زيادة أحرف لغرض:',
                options: [
                    'الزينة',
                    'التوقيف الشرعي في المصحف',
                    'السرعة'
                ],
                answer: 'التوقيف الشرعي في المصحف'
            },
            {
                id: 106,
                type: 'truefalse',
                question: 'يُعتبر توحيد رسم "الضاد والظاء" دعوة مرفوضة لفساد المعنى الدلالي.',
                answer: 'صح'
            },
            {
                id: 107,
                type: 'multiple',
                question: 'الرسم القرآني يعتمد أحياناً على:',
                options: [
                    'تسهيل الهمز (لهجة قريش)',
                    'تشديد كل الحروف',
                    'الخط الكوفي فقط'
                ],
                answer: 'تسهيل الهمز (لهجة قريش)'
            },
            {
                id: 108,
                type: 'truefalse',
                question: 'يُمنع الاجتهاد في رسم المصحف حتى لو كان لغرض التعليم.',
                answer: 'صح'
            },
            {
                id: 109,
                type: 'multiple',
                question: 'كتابة "مائة" بالألف هي من خصائص:',
                options: [
                    'الإملاء الحديث فقط',
                    'الرسم القرآني والقديم',
                    'الصحافة'
                ],
                answer: 'الرسم القرآني والقديم'
            },
            {
                id: 110,
                type: 'truefalse',
                question: 'الرسم الإملائي الحديث يهدف لتجاوز الحالات الشاذة وجعل القواعد مطردة.',
                answer: 'صح'
            },

            // الإملاء والألف (111-120)
            {
                id: 111,
                type: 'multiple',
                question: 'تُزاد الألف (ألف الإطلاق) في نهاية:',
                options: [
                    'الأسماء',
                    'الأبيات الشعرية عند الحاجة',
                    'الأفعال المضارعة المرفوعة'
                ],
                answer: 'الأبيات الشعرية عند الحاجة'
            },
            {
                id: 112,
                type: 'truefalse',
                question: 'تُحذف ألف "ما" الاستفهامية إذا سبقت بحرف جر (مثل: بِمَ، عَمَّ).',
                answer: 'صح'
            },
            {
                id: 113,
                type: 'multiple',
                question: 'تُكتب الألف "سفلية" (مقصورة) في الأفعال:',
                options: [
                    'الثلاثية التي أصلها واو',
                    'فوق الثلاثية (الرباعي والخماسي) مطلقاً (مثل: أعطى)',
                    'التي تنتهي بهمزة'
                ],
                answer: 'فوق الثلاثية (الرباعي والخماسي) مطلقاً (مثل: أعطى)'
            },
            {
                id: 114,
                type: 'truefalse',
                question: 'تُكتب الألف ممدودة في كلمة "لكن".',
                answer: 'خطأ',
                explanation: 'تُنطق ولا تُكتب'
            },
            {
                id: 115,
                type: 'multiple',
                question: 'تُزاد "الألف الفارقة" بعد واو الجماعة في:',
                options: [
                    'جمع المذكر السالم (مهندسو)',
                    'الأفعال (مثل: لم يفعلوا)',
                    'الأسماء الخمسة'
                ],
                answer: 'الأفعال (مثل: لم يفعلوا)'
            },
            {
                id: 116,
                type: 'truefalse',
                question: 'تُحذف الألف خطاً في كلمات (إله، طه، الرحمن) بالرسم القرآني.',
                answer: 'صح'
            },
            {
                id: 117,
                type: 'multiple',
                question: 'تُكتب الألف مقصورة سفلية إذا كان قبلها ياء في اسم العلم:',
                options: [
                    'يحيى',
                    'ثريا',
                    'دنيا'
                ],
                answer: 'يحيى'
            },
            {
                id: 118,
                type: 'truefalse',
                question: 'تُكتب "ها أنذا" بحذف ألف "أنا" لتجنب توالي ثلاث ألفات.',
                answer: 'صح'
            },
            {
                id: 119,
                type: 'multiple',
                question: 'كلمة "إذن" الصواب كتابتها بالنون لـ:',
                options: [
                    'تمييزها عن "إذا" الشرطية',
                    'تسهيل النطق',
                    'اتباع رسم المصحف'
                ],
                answer: 'تمييزها عن "إذا" الشرطية'
            },
            {
                id: 120,
                type: 'truefalse',
                question: 'تُكتب الألف في أسماء الأعلام الأعجمية (مثل: أمريكا، آسيا) ممدودة غالباً.',
                answer: 'صح'
            }
        ];

// ============================================
// إعدادات التطبيق
// ============================================

const APP_CONFIG = {
    TOTAL_QUESTIONS_IN_DB: 120,
    QUESTIONS_TO_SELECT: 30,
    EXAM_DURATION: 60 * 60, // 60 دقيقة بالثواني
    AUTO_SAVE_INTERVAL: 30000 // 30 ثانية
};

// ============================================
// متغيرات التطبيق
// ============================================

let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = null;
let timerInterval = null;
let timeLeft = APP_CONFIG.EXAM_DURATION;
let examCompleted = false;
let currentQuestions = [];
let shuffledQuestions = [];
let autoSaveInterval = null;

// ============================================
// تهيئة التطبيق
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    try {
        initializeDarkMode();
        initializeAccessibility();
        initializeEventListeners();
        setupScrollTop();
        announceToScreenReader('تم تحميل امتحان اللغة العربية بنجاح');
    } catch (error) {
        ErrorHandler.showError('حدث خطأ أثناء تحميل التطبيق', error);
    }
});

// ============================================
// دوال إمكانية الوصول
// ============================================

function initializeAccessibility() {
    document.addEventListener('keydown', handleKeyboardNavigation);
    enhanceARIALabels();
    setupLiveRegions();
}

function handleKeyboardNavigation(event) {
    const activeScreen = document.querySelector('.screen.active');
    if (!activeScreen || activeScreen.id !== 'examScreen') return;
    
    switch(event.key) {
        case 'ArrowRight':
            event.preventDefault();
            document.getElementById('prevBtn').click();
            break;
        case 'ArrowLeft':
            event.preventDefault();
            document.getElementById('nextBtn').click();
            break;
        case ' ':
        case 'Enter':
            const focused = document.activeElement;
            if (focused.classList.contains('option')) {
                event.preventDefault();
                focused.click();
            }
            break;
        case 'Escape':
            const confirmModal = document.getElementById('confirmModal');
            if (!confirmModal.hidden) {
                document.getElementById('cancelEndBtn').click();
            }
            break;
    }
}

function enhanceARIALabels() {
    const elements = {
        'prevBtn': 'السؤال السابق',
        'nextBtn': 'السؤال التالي',
        'startExamBtn': 'بدء الامتحان',
        'endExamBtn': 'إنهاء الاختبار',
        'darkModeToggle': 'تبديل الوضع الليلي'
    };
    
    Object.entries(elements).forEach(([id, label]) => {
        const element = document.getElementById(id);
        if (element) element.setAttribute('aria-label', label);
    });
}

function setupLiveRegions() {
    let liveRegion = document.getElementById('live-region');
    if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'live-region';
        liveRegion.className = 'sr-only';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        document.body.appendChild(liveRegion);
    }
    
    window.announceToScreenReader = function(message) {
        liveRegion.textContent = message;
        setTimeout(() => {
            liveRegion.textContent = '';
        }, 1000);
    };
}

// ============================================
// دوال الوضع الليلي
// ============================================

function initializeDarkMode() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.setAttribute('data-theme', 'dark');
        const toggleBtn = document.getElementById('darkModeToggle');
        if (toggleBtn) {
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            toggleBtn.title = 'الوضع النهاري';
        }
    }
}

function toggleDarkMode() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        document.body.removeAttribute('data-theme');
        document.getElementById('darkModeToggle').innerHTML = '<i class="fas fa-moon"></i>';
        document.getElementById('darkModeToggle').title = 'الوضع الليلي';
        localStorage.setItem('darkMode', 'false');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('darkModeToggle').innerHTML = '<i class="fas fa-sun"></i>';
        document.getElementById('darkModeToggle').title = 'الوضع النهاري';
        localStorage.setItem('darkMode', 'true');
    }
    
    announceToScreenReader(`تم تفعيل الوضع ${isDark ? 'النهاري' : 'الليلي'}`);
}

// ============================================
// دوال بدء الامتحان
// ============================================

function startExam() {
    try {
        // إخفاء شاشة البداية وإظهار شاشة الامتحان
        document.getElementById('startScreen').classList.remove('active');
        document.getElementById('examScreen').classList.add('active');
        document.getElementById('startScreen').setAttribute('hidden', 'true');
        document.getElementById('examScreen').removeAttribute('hidden');
        
        // تهيئة المتغيرات
        currentQuestionIndex = 0;
        startTime = new Date();
        timeLeft = APP_CONFIG.EXAM_DURATION;
        examCompleted = false;
        
        // اختيار الأسئلة
        selectRandomQuestions();
        shuffleAllOptions();
        
        // بدء المؤقت
        startTimer();
        
        // تحميل السؤال الأول
        loadQuestion(currentQuestionIndex);
        
        // تحديث الواجهة
        updateQuestionsGrid();
        updateUnansweredAlert();
        
        // بدء الحفظ التلقائي
        startAutoSave();
        
        announceToScreenReader('بدأ الامتحان، لديك 60 دقيقة للإجابة على 30 سؤالاً');
    } catch (error) {
        ErrorHandler.showError('حدث خطأ أثناء بدء الامتحان', error);
    }
}

function selectRandomQuestions() {
    try {
        // اختر 30 سؤالاً عشوائياً
        const shuffled = [...quizQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, APP_CONFIG.QUESTIONS_TO_SELECT);
        
        currentQuestions = shuffled;
        userAnswers = new Array(shuffled.length).fill(null);
        
        return true;
    } catch (error) {
        ErrorHandler.showError('حدث خطأ في اختيار الأسئلة', error);
        return false;
    }
}

function shuffleAllOptions() {
    shuffledQuestions = currentQuestions.map(question => {
        if (question.type === 'multiple') {
            const options = [...question.options];
            const correctAnswer = question.answer;
            
            // خلط الخيارات
            for (let i = options.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [options[i], options[j]] = [options[j], options[i]];
            }
            
            return {
                ...question,
                shuffledOptions: options,
                shuffledCorrect: options.indexOf(correctAnswer)
            };
        } else {
            return {
                ...question,
                shuffledOptions: ['صح', 'خطأ'],
                shuffledCorrect: question.answer === 'صح' ? 0 : 1
            };
        }
    });
}

// ============================================
// دوال إدارة الأسئلة
// ============================================

function loadQuestion(index) {
    try {
        const question = shuffledQuestions[index];
        if (!question) throw new Error(`السؤال رقم ${index + 1} غير موجود`);
        
        // تحديث عناصر الواجهة
        document.getElementById('questionNumber').textContent = `س${index + 1}`;
        document.getElementById('questionText').textContent = question.question;
        
        // تحديث شريط التقدم
        updateProgressBar(index);
        
        // تحديث أزرار التنقل
        updateNavigationButtons(index);
        
        // إنشاء الخيارات
        createOptions(question, index);
        
        // تحديث الحالة
        updateQuestionStatus(index);
        updateARIALabels();
        
        announceToScreenReader(`السؤال رقم ${index + 1}: ${question.question.substring(0, 100)}...`);
    } catch (error) {
        ErrorHandler.showError('حدث خطأ أثناء تحميل السؤال', error);
    }
}

function createOptions(question, questionIndex) {
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.shuffledOptions.forEach((option, optionIndex) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.setAttribute('role', 'radio');
        optionElement.setAttribute('aria-checked', 'false');
        optionElement.setAttribute('tabindex', '0');
        
        const marker = document.createElement('div');
        marker.className = 'option-marker';
        marker.textContent = String.fromCharCode(1632 + optionIndex + 1);
        
        const text = document.createElement('div');
        text.className = 'option-text';
        text.textContent = option;
        
        optionElement.appendChild(marker);
        optionElement.appendChild(text);
        
        // تحديث حالة التحديد
        if (userAnswers[questionIndex] === optionIndex) {
            optionElement.classList.add('selected');
            optionElement.setAttribute('aria-checked', 'true');
        }
        
        // إضافة الأحداث
        optionElement.addEventListener('click', () => selectOption(optionIndex));
        optionElement.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectOption(optionIndex);
            }
        });
        
        optionsContainer.appendChild(optionElement);
    });
}

function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    loadQuestion(currentQuestionIndex);
    updateQuestionsGrid();
    updateUnansweredAlert();
    announceToScreenReader(`تم اختيار الخيار ${optionIndex + 1}`);
}

function updateProgressBar(index) {
    const progress = ((index + 1) / shuffledQuestions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = 
        `السؤال ${index + 1} من ${shuffledQuestions.length}`;
    document.getElementById('progressPercent').textContent = `${Math.round(progress)}%`;
}

function updateNavigationButtons(index) {
    document.getElementById('prevBtn').disabled = index === 0;
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.textContent = index === shuffledQuestions.length - 1 ? 'إنهاء الاختبار' : 'التالي';
    nextBtn.innerHTML = index === shuffledQuestions.length - 1 ? 
        'إنهاء الاختبار <i class="fas fa-flag-checkered"></i>' : 
        'التالي <i class="fas fa-arrow-left"></i>';
}

// ============================================
// دوال التنقل
// ============================================

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
        scrollToTop();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
        scrollToTop();
    } else {
        showConfirmModal();
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function setupScrollTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    scrollBtn.addEventListener('click', scrollToTop);
}

// ============================================
// دوال المؤقت
// ============================================

function startTimer() {
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timerElement = document.getElementById('timer').querySelector('span');
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft < 300) { // أقل من 5 دقائق
        document.getElementById('timer').style.color = 'var(--accent-color)';
        document.getElementById('timer').style.animation = 'pulse 1s infinite';
    }
}

// ============================================
// دوال إنهاء الامتحان والنتائج
// ============================================

function showConfirmModal() {
    const unanswered = userAnswers.filter(answer => answer === null).length;
    document.getElementById('remainingQuestions').textContent = unanswered;
    document.getElementById('confirmModal').hidden = false;
    announceToScreenReader(`لديك ${unanswered} أسئلة لم تتم الإجابة عليها`);
}

function endExam() {
    try {
        clearInterval(timerInterval);
        clearInterval(autoSaveInterval);
        examCompleted = true;
        
        // إخفاء شاشة الامتحان وإظهار شاشة النتائج
        document.getElementById('examScreen').classList.remove('active');
        document.getElementById('resultsScreen').classList.add('active');
        document.getElementById('examScreen').setAttribute('hidden', 'true');
        document.getElementById('resultsScreen').removeAttribute('hidden');
        
        // حساب النتائج
        calculateResults();
        
        // تنظيف التخزين المحلي
        localStorage.removeItem('examAutoSave');
        
        // عرض تأثيرات النجاح إذا كانت النسبة جيدة
        const score = parseInt(document.getElementById('correctAnswers').textContent);
        if (score >= Math.ceil(shuffledQuestions.length * 0.7)) {
            showConfetti();
        }
        
        announceToScreenReader('تم إنهاء الامتحان، يمكنك الآن مراجعة النتائج');
    } catch (error) {
        ErrorHandler.showError('حدث خطأ أثناء إنهاء الامتحان', error);
    }
}

function calculateResults() {
    try {
        let correctCount = 0;
        let wrongCount = 0;
        let unansweredCount = 0;
        
        shuffledQuestions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            
            if (userAnswer === null) {
                unansweredCount++;
            } else if (userAnswer === question.shuffledCorrect) {
                correctCount++;
            } else {
                wrongCount++;
            }
        });
        
        const totalQuestions = shuffledQuestions.length;
        const scorePercentage = (correctCount / totalQuestions) * 100;
        
        // تحديث واجهة النتائج
        updateResultsUI(correctCount, wrongCount, unansweredCount, scorePercentage);
        
        // تحديث دائرة النتيجة
        updateScoreCircle(scorePercentage);
        
        console.log(`النتائج: ${correctCount} صحيحة، ${wrongCount} خاطئة، ${unansweredCount} غير مجابة`);
    } catch (error) {
        ErrorHandler.showError('حدث خطأ أثناء حساب النتائج', error);
    }
}

function updateResultsUI(correct, wrong, unanswered, percentage) {
    document.getElementById('finalScore').textContent = `${correct}/${shuffledQuestions.length}`;
    document.getElementById('percentage').textContent = `${percentage.toFixed(1)}%`;
    document.getElementById('scorePercentage').textContent = `${percentage.toFixed(1)}%`;
    document.getElementById('correctAnswers').textContent = correct;
    document.getElementById('wrongAnswers').textContent = wrong;
    
    // حساب التقدير
    let gradeText, gradeColor;
    if (percentage >= 90) {
        gradeText = 'امتياز'; gradeColor = 'var(--success-color)';
    } else if (percentage >= 80) {
        gradeText = 'جيد جداً'; gradeColor = '#2ecc71';
    } else if (percentage >= 70) {
        gradeText = 'جيد'; gradeColor = 'var(--secondary-color)';
    } else if (percentage >= 60) {
        gradeText = 'مقبول'; gradeColor = 'var(--warning-color)';
    } else {
        gradeText = 'راسب'; gradeColor = 'var(--accent-color)';
    }
    
    document.getElementById('grade').textContent = gradeText;
    document.getElementById('grade').style.color = gradeColor;
    
    // حساب الوقت المستغرق
    if (startTime) {
        const endTime = new Date();
        const timeDiff = Math.floor((endTime - startTime) / 1000);
        const minutes = Math.floor(timeDiff / 60);
        const seconds = timeDiff % 60;
        document.getElementById('timeTaken').textContent = 
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
}

function updateScoreCircle(percentage) {
    const scoreCircle = document.getElementById('scoreCircle');
    const circleLength = 800;
    const offset = circleLength - (circleLength * (percentage / 100));
    
    setTimeout(() => {
        scoreCircle.style.strokeDashoffset = offset;
        
        // تغيير اللون حسب النسبة
        if (percentage >= 90) {
            scoreCircle.style.stroke = '#9b59b6';
        } else if (percentage >= 80) {
            scoreCircle.style.stroke = 'var(--success-color)';
        } else if (percentage >= 70) {
            scoreCircle.style.stroke = '#2ecc71';
        } else if (percentage >= 60) {
            scoreCircle.style.stroke = 'var(--warning-color)';
        } else {
            scoreCircle.style.stroke = 'var(--accent-color)';
        }
    }, 100);
}

// ============================================
// دوال الحفظ والاستعادة
// ============================================

function startAutoSave() {
    autoSaveInterval = setInterval(() => {
        autoSaveProgress();
    }, APP_CONFIG.AUTO_SAVE_INTERVAL);
}

function autoSaveProgress() {
    try {
        const progress = {
            currentQuestionIndex,
            userAnswers,
            timeLeft,
            currentQuestions: currentQuestions.map(q => q.id),
            startTime: startTime ? startTime.getTime() : null
        };
        
        localStorage.setItem('examAutoSave', JSON.stringify(progress));
        console.log('تم الحفظ التلقائي');
    } catch (error) {
        console.warn('فشل الحفظ التلقائي:', error);
    }
}

// ============================================
// دوال إضافية
// ============================================

function showConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

function updateQuestionStatus(index) {
    const statusElement = document.getElementById('questionStatus');
    if (userAnswers[index] === null) {
        statusElement.innerHTML = '<i class="fas fa-star"></i> جديد';
        statusElement.style.color = 'var(--warning-color)';
    } else {
        statusElement.innerHTML = '<i class="fas fa-check"></i> تم الإجابة';
        statusElement.style.color = 'var(--success-color)';
    }
}

function updateQuestionsGrid() {
    const questionsGrid = document.getElementById('questionsGrid');
    questionsGrid.innerHTML = '';
    
    shuffledQuestions.forEach((_, index) => {
        const button = document.createElement('button');
        button.className = 'question-nav-btn';
        button.textContent = index + 1;
        button.setAttribute('aria-label', `الانتقال إلى السؤال ${index + 1}`);
        
        if (index === currentQuestionIndex) {
            button.classList.add('current');
        } else if (userAnswers[index] !== null) {
            button.classList.add('answered');
        } else {
            button.classList.add('unanswered');
        }
        
        button.addEventListener('click', () => {
            currentQuestionIndex = index;
            loadQuestion(currentQuestionIndex);
            scrollToTop();
        });
        
        questionsGrid.appendChild(button);
    });
}

function updateUnansweredAlert() {
    const unanswered = userAnswers.filter(answer => answer === null).length;
    const alertElement = document.getElementById('unansweredAlert');
    const countElement = document.getElementById('unansweredCount');
    
    if (unanswered > 0) {
        countElement.textContent = `${unanswered} أسئلة من أصل ${shuffledQuestions.length}`;
        alertElement.style.display = 'flex';
    } else {
        alertElement.style.display = 'none';
    }
}

// ============================================
// تهيئة مستمعي الأحداث
// ============================================

function initializeEventListeners() {
    // أزرار التنقل
    document.getElementById('startExamBtn').addEventListener('click', startExam);
    document.getElementById('endExamBtn').addEventListener('click', showConfirmModal);
    document.getElementById('prevBtn').addEventListener('click', prevQuestion);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    
    // الوضع الليلي
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
    
    // أزرار النتائج
    document.getElementById('reviewBtn').addEventListener('click', toggleReview);
    document.getElementById('newTestBtn').addEventListener('click', startNewExam);
    document.getElementById('retryBtn').addEventListener('click', retryExam);
    
    // النوافذ المنبثقة
    document.getElementById('cancelEndBtn').addEventListener('click', () => {
        document.getElementById('confirmModal').hidden = true;
    });
    
    document.getElementById('confirmEndBtn').addEventListener('click', endExam);
    
    document.getElementById('closeReviewBtn').addEventListener('click', () => {
        document.getElementById('reviewSection').hidden = true;
    });
    
    // إغلاق النوافذ عند النقر خارجها
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.hidden = true;
        });
    });
}

// ============================================
// دوال المراجعة والاختبارات الجديدة
// ============================================

function toggleReview() {
    const reviewSection = document.getElementById('reviewSection');
    const reviewBtn = document.getElementById('reviewBtn');
    
    if (reviewSection.hidden) {
        reviewSection.hidden = false;
        reviewBtn.innerHTML = '<i class="fas fa-times"></i> إغلاق المراجعة';
        generateWrongAnswersReview();
        reviewSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        reviewSection.hidden = true;
        reviewBtn.innerHTML = '<i class="fas fa-list-check"></i> مراجعة الإجابات الخاطئة';
    }
}

function generateWrongAnswersReview() {
    const wrongAnswersList = document.getElementById('wrongAnswersList');
    const noWrongAnswers = document.getElementById('noWrongAnswers');
    
    wrongAnswersList.innerHTML = '';
    let wrongCount = 0;
    
    shuffledQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        
        if (userAnswer !== null && userAnswer !== question.shuffledCorrect) {
            wrongCount++;
            
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            
            reviewItem.innerHTML = `
                <div class="review-question">
                    <strong>س${index + 1}:</strong> ${question.question}
                </div>
                <div class="review-answers">
                    <div class="answer-item user-answer">
                        <i class="fas fa-user"></i>
                        <span>إجابتك: ${question.shuffledOptions[userAnswer]}</span>
                    </div>
                    <div class="answer-item correct-answer">
                        <i class="fas fa-check"></i>
                        <span>الإجابة الصحيحة: ${question.shuffledOptions[question.shuffledCorrect]}</span>
                    </div>
                    ${question.explanation ? `
                    <div class="explanation">
                        <i class="fas fa-info-circle"></i>
                        <span>${question.explanation}</span>
                    </div>
                    ` : ''}
                </div>
            `;
            
            wrongAnswersList.appendChild(reviewItem);
        }
    });
    
    if (wrongCount === 0) {
        wrongAnswersList.hidden = true;
        noWrongAnswers.hidden = false;
    } else {
        wrongAnswersList.hidden = false;
        noWrongAnswers.hidden = true;
    }
}

function startNewExam() {
    // إعادة تعيين كل شيء وبدء اختبار جديد
    document.getElementById('resultsScreen').classList.remove('active');
    document.getElementById('examScreen').classList.add('active');
    document.getElementById('resultsScreen').setAttribute('hidden', 'true');
    document.getElementById('examScreen').removeAttribute('hidden');
    
    startExam();
}

function retryExam() {
    // إعادة نفس الأسئلة
    document.getElementById('resultsScreen').classList.remove('active');
    document.getElementById('examScreen').classList.add('active');
    document.getElementById('resultsScreen').setAttribute('hidden', 'true');
    document.getElementById('examScreen').removeAttribute('hidden');
    
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    examCompleted = false;
    
    startTime = new Date();
    timeLeft = APP_CONFIG.EXAM_DURATION;
    
    startTimer();
    loadQuestion(currentQuestionIndex);
    updateQuestionsGrid();
    updateUnansweredAlert();
    
    document.getElementById('reviewSection').hidden = true;
    document.getElementById('reviewBtn').innerHTML = '<i class="fas fa-list-check"></i> مراجعة الإجابات الخاطئة';
    
    scrollToTop();
}

// ============================================
// تصدير الدوال للاستخدام العام
// ============================================

window.startExam = ErrorHandler.wrapFunction(startExam, 'startExam');
window.endExam = ErrorHandler.wrapFunction(endExam, 'endExam');
window.toggleDarkMode = ErrorHandler.wrapFunction(toggleDarkMode, 'toggleDarkMode');

console.log('تم تحميل تطبيق امتحان اللغة العربية بنجاح!');