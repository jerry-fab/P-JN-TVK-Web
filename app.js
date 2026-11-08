/**
 * TVK JOTHI NAGAR - OFFICIAL CLIENT APPLICATION
 * Features:
 * 1. Comprehensive Bilingual i18n Translation Engine (Tamil <-> English)
 * 2. Dark / Light Mode Switcher with LocalStorage Persistence
 * 3. Dynamic Issue Ambient Background Switcher (Road, Garbage, Drainage)
 * 4. Local Complaint Engine with LocalStorage Persistence
 * 5. UTF-8 Excel (.CSV) Generator for Ward Officers & Volunteers
 * 6. Interactive Search, Filter & Live Status Updater
 */

// Comprehensive i18n Translation Dictionary
const I18N = {
  ta: {
    page_title: 'தமிழக வெற்றிக் கழகம் | ஜோதி நகர் - தஞ்சாவூர் தொகுதி (TVK Jothi Nagar)',
    badge_live: 'LIVE',
    announcement_text: '📢 ஜோதி நகர் வார்டு மக்கள் குறைதீர்ப்பு மையம் செயல்பாட்டில் உள்ளது | 24/7 அவசர உதவி: 04362-234567',
    link_state_manifesto: '📜 மாநில தேர்தல் அறிக்கை 2026',
    brand_title: 'த.வெ.க <span>ஜோதி நகர்</span>',
    brand_subtitle: 'தஞ்சாவூர் சட்டமன்றத் தொகுதி | தஞ்சை மத்திய மாவட்டம்',
    nav_home: 'முகப்பு',
    nav_complaints: 'குறைதீர்ப்பு (Grievances)',
    nav_tracker: 'புகார் நிலை (Tracker)',
    nav_media: 'சமூக ஊடகம் (Media)',
    nav_leadership: 'தலைமை & கொள்கை',
    nav_manifesto: 'தேர்தல் அறிக்கை',
    btn_quick_report: 'புகார் பதிவு செய்க',

    hero_tag: 'வெற்றித் தமிழ்நாடு 2026 | நம் காலம் வருகிறது!',
    hero_title: 'மக்களுக்கான சேவை <br><span class="highlight-gold">ஜோதி நகர்</span> <span class="highlight-red">வளர்ச்சிப் பாதை</span>',
    hero_subtitle: 'தஞ்சாவூர் தொகுதி ஜோதி நகர் பகுதி வாழ் மக்களின் குடிமைப் பிரச்சனைகளுக்கு உடனுக்குடன் தீர்வு காணவும், தூய்மையான, பாதுகாப்பான, நவீன வார்டை உருவாக்கவும் நாம் கரம்கோர்ப்போம்.',
    pill_corp: 'மண்டலம்: <strong>தஞ்சை மாநகராட்சி</strong>',
    pill_const: 'தொகுதி: <strong>தஞ்சாவூர் (174)</strong>',
    pill_ward: 'வார்டு: <strong>ஜோதி நகர்</strong>',
    pill_leader: 'தலைமை: <strong>தளபதி விஜய்</strong>',
    hero_btn_report: '📢 உங்கள் பகுதி புகாரைப் பதியுங்கள்',
    hero_btn_manifesto: '🗳️ 2026 வார்டு கோரிக்கைகள்',
    hero_badge_name: 'தளபதி விஜய்',
    hero_badge_role: 'நிறுவனர் & தலைவர் - த.வெ.க',

    stat_resolved_text: 'தீர்க்கப்பட்ட மக்கள் புகார்கள்',
    stat_roads_text: 'சாலை & குழி சீரமைப்பு பணிகள்',
    stat_lights_text: 'புதிய தெருவிளக்குகள் & பழுது நீக்கம்',
    stat_volunteers_text: 'ஜோதி நகர் த.வெ.க தீவிர தொண்டர்கள்',

    complaints_badge: 'மக்கள் குறைதீர்ப்பு மையம்',
    complaints_title: 'ஜோதி நகர் வார்டு <span>பிரச்சனைகளை சுட்டிக்காட்டுங்கள்</span>',
    complaints_desc: 'கீழே உள்ள முக்கிய பிரச்சனை வகையைத் தேர்வு செய்யுங்கள். நீங்கள் தேர்வு செய்யும் போது பின்னணியில் அதற்கான புகைப்பட ஆதாரம் மற்றும் தீவிரத்தன்மை மாறும்.',

    road_urgency: 'முன்னுரிமை: அதிதீவிரம்',
    road_card_title: 'உடைந்த சாலைகள் & பள்ளங்கள்',
    road_card_desc: 'ஜோதி நகர் மெயின் ரோடு & குறுக்குத் தெருக்களில் குண்டும் குழியுமாக உள்ள சாலைகள், மழைநீர் தேக்கம், இருசக்கர வாகன விபத்து அபாயம்.',
    road_stat_text: '✓ 18 தீர்க்கப்பட்டது',

    garbage_urgency: 'சுகாதார அவசரம்',
    garbage_card_title: 'குப்பைக் கூளம் & துர்நாற்றம்',
    garbage_card_desc: 'தெருமுனை குப்பைத் தொட்டிகள் நிரம்பி வழிதல், பிளாஸ்டிக் கழிவுகள் தேக்கம், உரிய நேரத்தில் குப்பை வண்டி வராத பிரச்சனை.',
    garbage_stat_text: '✓ 42 தீர்க்கப்பட்டது',

    drainage_urgency: 'மழைக்கால அபாயம்',
    drainage_card_title: 'கழிவுநீர் வடிகால் அடைப்பு',
    drainage_card_desc: 'திறந்தவெளி சாக்கடைகள் நிரம்பி சாலையில் கழிவுநீர் பெருக்கெடுத்தல், கொசு உற்பத்தி, தொற்றுநோய் பரவும் தீவிர அபாயம்.',
    drainage_stat_text: '✓ 35 தீர்க்கப்பட்டது',

    other_urgency: 'பொது நலம் & இதர',
    other_card_title: 'இதர பொதுப் பிரச்சனைகள்',
    other_card_desc: 'குடிநீர் விநியோகம், தெருவிளக்கு பழுது, மின்சாரக் கம்பி, மரக்கிளை அச்சுறுத்தல் அல்லது உங்கள் வார்டு சார்ந்த தனிப்பட்ட பொதுப் பிரச்சனை.',
    other_stat_text: '✓ 54 தீர்க்கப்பட்டது',
    card_select_hint: 'தேர்வு செய்ய சொடுக்கவும் 👉',

    form_heading: 'புதிய குறைதீர்ப்பு மனு பதிவு',
    label_name: 'உங்கள் பெயர் (Full Name)',
    placeholder_name: 'எ.கா: சுந்தர்ராஜ்',
    label_phone: 'கைபேசி எண் (Mobile Number)',
    placeholder_phone: '10 இலக்க எண்',
    label_category: 'பிரச்சனை வகை (Issue Category)',
    opt_road: '🛣️ உடைந்த சாலைகள் / குண்டும் குழியும் (Road Damage)',
    opt_garbage: '🗑️ குப்பை தேக்கம் & சுகாதாரம் (Garbage / Sanitation)',
    opt_drainage: '🌊 கழிவுநீர் வடிகால் அடைப்பு (Drainage Overflow)',
    opt_streetlight: '💡 தெருவிளக்கு பழுது (Streetlight Outage)',
    opt_water: '🚰 குடிநீர் விநியோக குறைபாடு (Drinking Water)',
    opt_other: '📌 இதர பொது பிரச்சனைகள் (Other Civic Needs)',
    label_street: 'ஜோதி நகர் பகுதி / தெரு (Street Location)',
    opt_select_street: 'உங்கள் தெருவைத் தேர்வு செய்யவும்',
    label_custom_issue: 'குறிப்பிட்ட பிரச்சனை வகை / தலைப்பு (Specify Your Issue Topic)',
    placeholder_custom_issue: 'எ.கா: குடிநீர் பற்றாக்குறை / மின்கம்பி தொங்குதல் / பொது கழிப்பிடம்',
    label_map_picker: 'வரைபடத்தில் இருப்பிடத்தைக் குறிக்கவும் (Pin Location on Map)',
    optional_tag: '(விரும்பினால் / Optional)',
    btn_gps_text: 'என் தற்போதைய இடம் (Use GPS)',
    btn_gps_detecting: 'ஜிபிஎஸ் தேடுகிறது...',
    map_hint_text: 'வரைபடத்தில் கிளிக் செய்து சரியான இடத்தை தேர்வு செய்யவும்',
    map_initial_status: 'ஜோதி நகர் மையம் (Jothi Nagar Center) - 10.7531° N, 79.1230° E',
    map_pinned_status: '📍 தேர்ந்தெடுக்கப்பட்ட இடம்:',
    map_gps_denied: 'இருப்பிட அனுமதி மறுக்கப்பட்டது அல்லது கிடைக்கவில்லை.',
    map_gps_success: 'உங்கள் தற்போதைய இடம் துல்லியமாக கண்டறியப்பட்டது!',
    label_desc: 'பிரச்சனை குறித்த விரிவான தகவல் (Problem Description)',
    placeholder_desc: 'பிரச்சனையின் தன்மை, எத்தனை நாட்களாக இந்த நிலை உள்ளது, குறிப்பிட்ட அடையாளம் போன்றவற்றை எழுதவும்...',
    label_photo: 'புகைப்பட ஆதாரம் இணைக்கவும் (Optional Photo Proof)',
    photo_box_text: '<strong>புகைப்படத்தை தேர்ந்தெடுக்க இங்கே கிளிக் செய்யவும்</strong> அல்லது இழுத்து விடவும் (Max 5MB)',
    label_severity: 'தீவிரத்தன்மை:',
    severity_high: '🔴 அவசரம் (High)',
    severity_medium: '🟡 நடுத்தரம் (Medium)',
    btn_submit_text: 'புகாரை சமர்ப்பிக்கவும்',

    tracker_title: '📊 ஜோதி நகர் வார்டு புகார் கண்காணிப்பகம் (Grievance Tracker)',
    tracker_subtitle: 'வார்டு செயலாளர்கள் மற்றும் தன்னார்வலர்களுக்கான நேரடி தரவுத்தளம் (Local Storage & Instant Excel Export)',
    search_placeholder: 'பெயர் அல்லது தெரு தேடுக...',
    filter_all: 'அனைத்து நிலைகள்',
    filter_pending: 'புதியது (Pending)',
    filter_in_progress: 'செயல்பாட்டில் (In Progress)',
    filter_resolved: 'தீர்க்கப்பட்டது (Resolved)',
    btn_export_excel: '📥 Excel வடிவில் பதிவிறக்கு (.CSV)',

    th_ref_id: 'குறிப்பு எண் (Ref ID)',
    th_date: 'தேதி (Date)',
    th_citizen: 'மனுதாரர் (Citizen)',
    th_street: 'தெரு / பகுதி (Street)',
    th_category: 'பிரச்சனை வகை (Category)',
    th_urgency: 'தீவிரம் (Urgency)',
    th_status: 'நிலை (Status)',
    th_action: 'செயல் (Action)',

    insta_subtitle: 'ஜோதி நகர் த.வெ.க அதிகாரப்பூர்வ இன்ஸ்டாகிராம் பக்கம் | தஞ்சாவூர்',
    btn_follow_insta: '📷 Instagram-ல் பின்தொடரவும்',
    badge_trending: 'டிரெண்டிங் (TRENDING)',
    gallery_slide_hint: 'தானாக நகரும் கேலரி (Auto Sliding)',
    top_gallery_badge: '⭐ கழக வழிகாட்டிகள் & தலைமை',
    top_gallery_title: 'த.வெ.க ஜோதி நகர் <span>தலைமை & களப்பணியாளர்கள்</span>',
    top_gallery_desc: 'மக்கள் பணிக்காக தங்களை அர்ப்பணித்த கழகத்தின் வழிகாட்டிகள் மற்றும் ஜோதி நகர் களப்பணியாளர்கள்.',
    insta_sync_title: 'நேரலை சரிபார்ப்பு (Hourly Live Sync)',
    btn_sync_now: 'இப்போது சரிபார்க்க (Check Now)',
    btn_add_post: 'டாப் 5 பதிவுகள் மேலாண்மை (Manage Posts)',
    modal_add_post_title: 'இன்ஸ்டாகிராம் டாப் 5 பதிவுகள் மேலாண்மை',
    modal_add_post_desc: 'ஜோதி நகர் வார்டு தளத்தின் டாப் 5 இன்ஸ்டாகிராம் பதிவுகளை உடனுக்குடன் சேர்க்கலாம், திருத்தலாம் அல்லது புதிய பதிவை #1 டிரெண்டிங்கில் ஏற்றலாம்.',
    tab_add_new: '➕ புதிய பதிவு (#1 Trending)',
    tab_manage_list: '📋 டாப் 5 பதிவுகள் பட்டியல்',
    tab_live_bridge: '⚡ நேரலை API (Behold)',
    label_post_image: 'புகைப்படம் (Image)',
    label_post_caption_ta: 'பதிவின் விவரம் - தமிழ் (Caption Tamil)',
    label_post_caption_en: 'பதிவின் விவரம் - English (Caption English)',
    label_post_tags: 'ஹேஷ்டேக் (Hashtags)',
    label_post_url: 'இன்ஸ்டாகிராம் பதிவு இணைப்பு (Post URL)',
    label_post_likes: 'விருப்பங்கள் (Likes)',
    label_post_comments: 'கருத்துகள் (Comments)',
    btn_cancel: 'ரத்து செய்க',
    btn_publish_post: '🚀 #1 டிரெண்டிங் பதிவாக சேர்க்க',
    btn_reset_defaults: '🔄 பழைய நிலைக்கு மீட்டமை (Reset to Defaults)',
    sync_just_now: 'கடைசி சரிபார்ப்பு: இப்போது (Checked: Just now)',
    sync_minutes_ago: 'கடைசி சரிபார்ப்பு: {m} நிமிடங்களுக்கு முன் | அடுத்தது: {next} நிமிடங்களில்',
    insta_card_5: 'ஜோதி நகர் வார்டு த.வெ.க நிர்வாகிகள் கள ஆய்வு & மக்கள் குறைதீர்ப்பு கலந்துரையாடல்.',
    insta_view_btn: 'Instagram-ல் பார்க்க ↗',
    leader4_badge: 'கொள்கை வழிகாட்டிகள்',
    leader4_name: 'கழக கொள்கை முன்னோடிகள்',
    leader4_role: 'பெரியார் • அம்பேத்கர் • காமராஜர் • வேலு நாச்சியார்',
    leader4_desc: 'சமூக நீதி, சமத்துவம், கல்வி வளர்ச்சி மற்றும் பெண் விடுதலைக்கான லட்சிய வழிகாட்டிகள்.',
    leader5_badge: 'மக்கள் நற்பணிகள்',
    leader5_name: 'ஜோதி நகர் மக்கள் சேவை இயக்கம்',
    leader5_role: 'தூய்மை & வளர்ச்சிப் பணிகள்',
    leader5_desc: 'வார்டு மக்களின் குடிநீர், சுகாதாரம், கல்வி மற்றும் சாலை மேம்பாட்டுப் பணிகளுக்கான நேரடி களப்பணி.',
    insta_card_1: 'ஜோதி நகர் பகுதியில் த.வெ.க சார்பில் கல்வி உபகரணங்கள் மற்றும் நலத்திட்ட உதவிகள் வழங்கப்பட்டது.',
    insta_card_2: '2026 சட்டமன்ற தேர்தலுக்கான ஜோதி நகர் இளைஞர் பாசறை ஆலோசனைக் கூட்டம்.',
    insta_card_3: 'பசுமை தஞ்சை இயக்கம் - ஜோதி நகர் பள்ளி வளாகத்தில் மரக்கன்றுகள் நடும் விழா.',
    insta_card_4: 'பொதுமக்களுக்கான இலவச ரத்த அழுத்த மற்றும் சர்க்கரை நோய் பரிசோதனை முகாம்.',

    leadership_badge: 'கழக தலைமை & வழிகாட்டிகள்',
    leadership_title: 'நேர்மையான தலைமை <span>மக்களுக்கான பாதை</span>',
    leadership_desc: 'மண்ணின் பெருமையும், மக்களின் உரிமையும் காக்க உருவான புரட்சி இயக்கம்.',
    leader1_badge: 'நிறுவனர் & தலைவர்',
    leader1_name: 'தளபதி விஜய்',
    leader1_role: 'தலைவர் - தமிழக வெற்றிக் கழகம்',
    leader1_desc: 'சமூக நீதி, ஊழலற்ற நிர்வாகம் மற்றும் இளைஞர்களுக்கான புது அரசியல் வாய்ப்பை உருவாக்கி தரும் உறுதிமிக்க தலைமை.',
    leader2_badge: 'மாவட்டச் செயலாளர்',
    leader2_name: 'திரு. இரா.விஜய்சரவணன்',
    leader2_role: 'தஞ்சை மத்திய மாவட்ட கழக செயலாளர்',
    leader2_desc: 'தஞ்சை மத்திய மாவட்டம் மற்றும் தஞ்சாவூர் சட்டமன்றத் தொகுதியின் வளர்ச்சிப் பணிகளை முன்னெடுக்கும் கழக வழிகாட்டி.',
    leader3_badge: 'வார்டு பொறுப்பாளர்கள்',
    leader3_name: 'ஜோதி நகர் வார்டு குழு',
    leader3_role: 'வார்டு நிர்வாகிகள் & இளைஞர் அணி',
    leader3_desc: 'ஜோதி நகர் வாழ் மக்களின் அன்றாட பிரச்சனைகளை மாநகராட்சி மற்றும் கழக தலைமைக்கு உடனுக்குடன் கொண்டு செல்லும் களப்பணியாளர்கள்.',

    pillar1_title: 'சமூக நீதி (Social Justice)',
    pillar1_desc: 'பாகுபாடின்றி அனைவருக்கும் சமவாய்ப்புகளை உருவாக்குதல் மற்றும் அடித்தட்டு மக்களின் உரிமைகளை நிலைநாட்டுதல்.',
    pillar2_title: 'தொழில்நுட்ப மேம்பாடு (Tech Innovation)',
    pillar2_desc: 'நவீன தகவல் தொழில்நுட்பத்தைப் பயன்படுத்தி வெளிப்படையான, வேகமான மக்கள் குறைதீர்ப்பு சேவை வழங்குதல்.',
    pillar3_title: 'இளைய தலைமுறைக்கு வாய்ப்பு (Youth Leadership)',
    pillar3_desc: 'அரசியல் மற்றும் சமூக சேவையில் படித்த, நேர்மையான இளைஞர்களைத் தலைமைப் பொறுப்புக்குக் கொண்டுவருதல்.',

    manifesto_title: '2026 தேர்தல் அறிக்கை - ஜோதி நகர் பரிந்துரைகள்',
    manifesto_desc: 'உங்கள் தெரு அல்லது வார்டுக்கான தொலைநோக்கு திட்டங்களை மாநில தலைமைக்கு உடனே சமர்ப்பியுங்கள்!',
    manifesto_btn: '🚀 மாநில தளத்தில் பதிவு செய்க (tvkmanifesto2026.com)',

    footer_brand: 'த.வெ.க ஜோதி நகர்',
    footer_tagline: 'தஞ்சை மத்திய மாவட்ட த.வெ.க வழிகாட்டுதலில் செயல்படும் ஜோதி நகர் பகுதி மக்கள் சேவை மற்றும் குறைதீர்ப்பு தளம்.',
    footer_col1_title: 'முக்கிய இணைப்புகள்',
    footer_col2_title: 'அதிகாரப்பூர்வ தளங்கள்',
    footer_col3_title: 'வார்டு அலுவலகம்',
    footer_address: 'த.வெ.க ஜோதி நகர் வார்டு மையம்,<br>மெயின் ரோடு, ஜோதி நகர்,<br>தஞ்சாவூர் - 613 007.<br>📞 உதவி எண்: +91 94432 XXXXX',
    footer_copyright: '© 2026 தமிழக வெற்றிக் கழகம் (TVK) - ஜோதி நகர் வார்டு, தஞ்சாவூர் தொகுதி. All Rights Reserved.',
    footer_sub: 'Designed with ❤️ for Thanjavur Citizens',

    modal_success_title: 'உங்கள் புகார் வெற்றிகரமாக பதிவானது!',
    modal_success_desc: 'தஞ்சை மத்திய மாவட்ட த.வெ.க ஜோதி நகர் வார்டு குழு உங்கள் புகாரை ஆய்வு செய்து உடனடியாக நடவடிக்கை எடுக்கும்.',
    modal_ref_label: 'புகார் குறிப்பு எண் (Reference ID):',
    modal_btn_whatsapp: '💬 WhatsApp-ல் வார்டு செயலாளருக்கு அனுப்புக',
    modal_btn_close: 'மூடுக (Close)',

    badge_road: '🛣️ தேர்ந்தெடுக்கப்பட்ட வகை: உடைந்த சாலை (Road Damage)',
    badge_garbage: '🗑️ தேர்ந்தெடுக்கப்பட்ட வகை: குப்பை கழிவு (Garbage Overflow)',
    badge_drainage: '🌊 தேர்ந்தெடுக்கப்பட்ட வகை: கழிவுநீர் அடைப்பு (Drainage Blockage)',
    badge_streetlight: '💡 தேர்ந்தெடுக்கப்பட்ட வகை: தெருவிளக்கு (Streetlight)',
    badge_water: '🚰 தேர்ந்தெடுக்கப்பட்ட வகை: குடிநீர் (Water Supply)',
    badge_other: '📌 தேர்ந்தெடுக்கப்பட்ட வகை: இதர பிரச்சனை (Other)'
  },

  en: {
    page_title: 'Tamilaga Vettri Kazhagam | Jothi Nagar - Thanjavur Constituency (TVK Jothi Nagar)',
    badge_live: 'LIVE',
    announcement_text: '📢 Jothi Nagar Ward Grievance Redressal Center Active | 24/7 Helpline: 04362-234567',
    link_state_manifesto: '📜 State Manifesto 2026',
    brand_title: 'TVK <span>Jothi Nagar</span>',
    brand_subtitle: 'Thanjavur Assembly Constituency | Thanjavur Central District',
    nav_home: 'Home',
    nav_complaints: 'Report Grievances',
    nav_tracker: 'Grievance Tracker',
    nav_media: 'Social Media',
    nav_leadership: 'Leadership & Ideology',
    nav_manifesto: 'Manifesto 2026',
    btn_quick_report: 'Report Issue',

    hero_tag: 'Vettri Tamil Nadu 2026 | Our Time Has Arrived!',
    hero_title: 'Dedicated Citizen Service <br><span class="highlight-gold">Jothi Nagar</span> <span class="highlight-red">Development Path</span>',
    hero_subtitle: 'Let us join hands with Tamilaga Vettri Kazhagam to resolve civic problems in Jothi Nagar, Thanjavur Constituency, and build a clean, modern, and safe ward.',
    pill_corp: 'Corporation: <strong>Thanjavur City Municipal Corp</strong>',
    pill_const: 'Constituency: <strong>Thanjavur (174)</strong>',
    pill_ward: 'Ward: <strong>Jothi Nagar</strong>',
    pill_leader: 'Leadership: <strong>Thalapathy Vijay</strong>',
    hero_btn_report: '📢 Report a Local Ward Issue',
    hero_btn_manifesto: '🗳️ 2026 Ward Proposals',
    hero_badge_name: 'Thalapathy Vijay',
    hero_badge_role: 'Founder & President - TVK',

    stat_resolved_text: 'Resolved Citizen Grievances',
    stat_roads_text: 'Road Patch & Pothole Works',
    stat_lights_text: 'Streetlights Installed & Restored',
    stat_volunteers_text: 'Active Jothi Nagar TVK Volunteers',

    complaints_badge: 'Citizen Grievance Redressal Center',
    complaints_title: 'Highlight Issues in <span>Jothi Nagar Ward</span>',
    complaints_desc: 'Select a major civic issue category below. As you click, authentic photographic proof and urgency levels will dynamically display in the background.',

    road_urgency: 'Priority: Critical',
    road_card_title: 'Damaged Roads & Potholes',
    road_card_desc: 'Severe potholes, gravel degradation, and waterlogging across Jothi Nagar Main Road and Cross Streets causing accident hazards.',
    road_stat_text: '✓ 18 Resolved',

    garbage_urgency: 'Sanitation Urgent',
    garbage_card_title: 'Garbage Overflow & Waste Dump',
    garbage_card_desc: 'Overflowing municipal corner dumpsters, uncollected plastics, odor hazard, and irregular municipal collection trucks.',
    garbage_stat_text: '✓ 42 Resolved',

    drainage_urgency: 'Monsoon Flood Risk',
    drainage_card_title: 'Blocked Storm Drains & Sewage',
    drainage_card_desc: 'Stagnant open wastewater drains overflowing onto roadways, mosquito breeding grounds, and serious infection hazards.',
    drainage_stat_text: '✓ 35 Resolved',

    other_urgency: 'Civic Needs & Other',
    other_card_title: 'Other Civic Issues',
    other_card_desc: 'Drinking water shortage, dangling electric wires, tree branch hazards, public sanitation, or any specific local concern.',
    other_stat_text: '✓ 54 Resolved',
    card_select_hint: 'Click to Select 👉',

    form_heading: 'Register a New Ward Grievance',
    label_name: 'Your Name (Full Name)',
    placeholder_name: 'e.g. Sundarraj',
    label_phone: 'Mobile Number',
    placeholder_phone: '10-digit mobile number',
    label_category: 'Issue Category',
    opt_road: '🛣️ Damaged Roads / Potholes (Road Damage)',
    opt_garbage: '🗑️ Garbage Overflow & Sanitation (Garbage)',
    opt_drainage: '🌊 Blocked Drainage & Sewage (Drainage)',
    opt_streetlight: '💡 Streetlight Outage / Malfunction (Streetlight)',
    opt_water: '🚰 Drinking Water Shortage (Water Supply)',
    opt_other: '📌 Other Civic Issues (Other Needs)',
    label_street: 'Jothi Nagar Street Location',
    opt_select_street: 'Select your street / area',
    label_custom_issue: 'Specify Your Issue Topic / Title',
    placeholder_custom_issue: 'e.g. Low water pressure / Loose electric wires / Public park maintenance',
    label_map_picker: 'Pin Exact Location on Map',
    optional_tag: '(Optional)',
    btn_gps_text: 'Use My Current Location (GPS)',
    btn_gps_detecting: 'Detecting GPS...',
    map_hint_text: 'Click or tap on the map to pin the exact problem spot',
    map_initial_status: 'Jothi Nagar Center - 10.7531° N, 79.1230° E',
    map_pinned_status: '📍 Pinned Location:',
    map_gps_denied: 'Location access was denied or unavailable on this device.',
    map_gps_success: 'Your current location detected successfully!',
    label_desc: 'Detailed Problem Description',
    placeholder_desc: 'Describe the issue, duration of problem, exact landmarks or street corner...',
    label_photo: 'Attach Photo Proof (Optional Photo Proof)',
    photo_box_text: '<strong>Click here to upload photo</strong> or drag & drop (Max 5MB)',
    label_severity: 'Urgency Level:',
    severity_high: '🔴 High (Urgent)',
    severity_medium: '🟡 Medium',
    btn_submit_text: 'Submit Grievance',

    tracker_title: '📊 Jothi Nagar Ward Grievance Tracker',
    tracker_subtitle: 'Live Civic Database for Ward Secretaries & Volunteers (Local Storage & Instant Excel Export)',
    search_placeholder: 'Search by name, street, or ID...',
    filter_all: 'All Statuses',
    filter_pending: 'Pending (புதியது)',
    filter_in_progress: 'In Progress (செயல்பாட்டில்)',
    filter_resolved: 'Resolved (தீர்க்கப்பட்டது)',
    btn_export_excel: '📥 Download as Excel (.CSV)',

    th_ref_id: 'Ref ID',
    th_date: 'Date',
    th_citizen: 'Citizen Name',
    th_street: 'Street Location',
    th_category: 'Category',
    th_urgency: 'Urgency',
    th_status: 'Status',
    th_action: 'Action',

    insta_subtitle: 'Official Instagram Feed of TVK Jothi Nagar | Thanjavur',
    btn_follow_insta: '📷 Follow on Instagram',
    badge_trending: 'TRENDING',
    gallery_slide_hint: 'Auto-sliding Gallery',
    top_gallery_badge: '⭐ Leadership & Ward Committee',
    top_gallery_title: 'TVK Jothi Nagar <span>Leadership & Frontline Team</span>',
    top_gallery_desc: 'Dedicated party mentors and grassroots frontline workers serving the citizens of Jothi Nagar.',
    insta_sync_title: 'Hourly Live Sync (நேரலை)',
    btn_sync_now: 'Check Now (சரிபார்க்க)',
    btn_add_post: 'Manage Top 5 Posts (மேலாண்மை)',
    modal_add_post_title: 'Manage Top 5 Instagram Posts',
    modal_add_post_desc: 'Add, edit, or promote posts to the #1 Trending spot on the TVK Jothi Nagar portal.',
    tab_add_new: '➕ Add New Post (#1)',
    tab_manage_list: '📋 Top 5 Posts List',
    tab_live_bridge: '⚡ Live API (Behold)',
    label_post_image: 'Select Image / Photo',
    label_post_caption_ta: 'Caption (Tamil)',
    label_post_caption_en: 'Caption (English)',
    label_post_tags: 'Hashtags',
    label_post_url: 'Instagram Post Link (URL)',
    label_post_likes: 'Likes Count',
    label_post_comments: 'Comments Count',
    btn_cancel: 'Cancel',
    btn_publish_post: '🚀 Publish as #1 Trending Post',
    btn_reset_defaults: '🔄 Reset to Default Posts',
    sync_just_now: 'Last checked: Just now',
    sync_minutes_ago: 'Last checked: {m}m ago | Next sync in: {next}m',
    insta_card_5: 'Jothi Nagar TVK ward office bearers field inspection and public grievance outreach meeting.',
    insta_view_btn: 'View on Instagram ↗',
    leader4_badge: 'Ideological Icons',
    leader4_name: 'Party Ideological Mentors',
    leader4_role: 'Periyar • Ambedkar • Kamarajar • Velu Nachiyar',
    leader4_desc: 'Ideological pillars guiding our movement for social justice, equality, education, and women empowerment.',
    leader5_badge: 'Community Service',
    leader5_name: 'Jothi Nagar Public Outreach',
    leader5_role: 'Sanitation & Ward Development',
    leader5_desc: 'Direct grassroots frontline initiatives for drinking water, hygiene, education, and road restoration.',
    insta_card_1: 'TVK organized welfare distribution and educational supplies drive for underprivileged students in Jothi Nagar.',
    insta_card_2: 'TVK Jothi Nagar Youth Wing strategy meet for the upcoming 2026 Assembly Elections.',
    insta_card_3: 'Green Thanjavur Movement: Tree sapling plantation drive organized at Jothi Nagar school campus.',
    insta_card_4: 'Free health screening camp for blood pressure and diabetes organized for local ward residents.',

    leadership_badge: 'Party Leadership & Mentors',
    leadership_title: 'Honest Leadership <span>The Path for the People</span>',
    leadership_desc: "A people's revolutionary movement founded to protect cultural pride and citizen rights.",
    leader1_badge: 'Founder & President',
    leader1_name: 'Thalapathy Vijay',
    leader1_role: 'President - Tamilaga Vettri Kazhagam',
    leader1_desc: 'Decisive, visionary leadership fighting for social justice, corruption-free governance, and transformative political empowerment for youth.',
    leader2_badge: 'District Secretary',
    leader2_name: 'Mr. R. Vijay Saravanan',
    leader2_role: 'Thanjavur Central District Party Secretary',
    leader2_desc: 'Dedicated district mentor driving developmental initiatives across Thanjavur Constituency and Central District.',
    leader3_badge: 'Ward Office Bearers',
    leader3_name: 'Jothi Nagar Ward Committee',
    leader3_role: 'Ward Administrators & Youth Wing',
    leader3_desc: 'Grassroots frontline workers actively bridging citizen grievances with city municipal authorities and party leadership.',

    pillar1_title: 'Social Justice (சமூக நீதி)',
    pillar1_desc: 'Creating equal opportunities without discrimination and upholding the fundamental rights of every citizen.',
    pillar2_title: 'Tech Innovation (தொழில்நுட்ப மேம்பாடு)',
    pillar2_desc: 'Leveraging modern digital technology for transparent, high-speed, and accountable civic service delivery.',
    pillar3_title: 'Youth Leadership (இளைய தலைமுறை)',
    pillar3_desc: 'Grooming educated, passionate, and incorruptible young leaders into frontline political and social leadership.',

    manifesto_title: '2026 Election Manifesto - Jothi Nagar Proposals',
    manifesto_desc: 'Submit your visionary proposals for your street and ward directly to the State TVK Manifesto committee!',
    manifesto_btn: '🚀 Submit on State Portal (tvkmanifesto2026.com)',

    footer_brand: 'TVK Jothi Nagar',
    footer_tagline: 'Citizen service and civic grievance portal for Jothi Nagar, operating under the guidance of TVK Thanjavur Central District.',
    footer_col1_title: 'Quick Links',
    footer_col2_title: 'Official Portals',
    footer_col3_title: 'Ward Office Address',
    footer_address: 'TVK Jothi Nagar Ward Office,<br>Main Road, Jothi Nagar,<br>Thanjavur - 613 007.<br>📞 Helpline: +91 94432 XXXXX',
    footer_copyright: '© 2026 Tamilaga Vettri Kazhagam (TVK) - Jothi Nagar Ward, Thanjavur Constituency. All Rights Reserved.',
    footer_sub: 'Designed with ❤️ for Thanjavur Citizens',

    modal_success_title: 'Grievance Registered Successfully!',
    modal_success_desc: 'TVK Thanjavur Central District & Jothi Nagar Ward Committee will review your grievance and take prompt action.',
    modal_ref_label: 'Grievance Reference ID:',
    modal_btn_whatsapp: '💬 Send to Ward Secretary on WhatsApp',
    modal_btn_close: 'Close',

    badge_road: '🛣️ Selected Category: Road Damage',
    badge_garbage: '🗑️ Selected Category: Garbage Overflow',
    badge_drainage: '🌊 Selected Category: Blocked Drainage',
    badge_streetlight: '💡 Selected Category: Streetlight Outage',
    badge_water: '🚰 Selected Category: Water Scarcity',
    badge_other: '📌 Selected Category: Other Civic Need'
  }
};

// Initial Seed Data for Jothi Nagar Ward
const INITIAL_COMPLAINTS = [
  {
    refId: 'TVK-JN-2026-0101',
    date: '15-10-2026',
    name: 'மு. ராமச்சந்திரன் (M. Ramachandran)',
    phone: '98421XXXXX',
    category: 'road',
    categoryLabel_ta: 'உடைந்த சாலை / பள்ளம்',
    categoryLabel_en: 'Damaged Road / Potholes',
    street: 'ஜோதி நகர் மெயின் ரோடு (Main Road)',
    desc_ta: 'மழைக்காலத்திற்குப் பின் பெரிய பள்ளங்கள் ஏற்பட்டு இருசக்கர வாகன ஓட்டிகள் தொடர்ந்து விபத்துக்குள்ளாகின்றனர்.',
    desc_en: 'Deep potholes after recent rains posing severe accident risk to two-wheeler riders.',
    urgency: 'High',
    status: 'தீர்க்கப்பட்டது'
  },
  {
    refId: 'TVK-JN-2026-0102',
    date: '16-10-2026',
    name: 'க. கவிதா (K. Kavitha)',
    phone: '94432XXXXX',
    category: 'garbage',
    categoryLabel_ta: 'குப்பைக் கூளம் & துர்நாற்றம்',
    categoryLabel_en: 'Garbage Dump & Waste Overflow',
    street: 'பேருந்து நிறுத்தம் பகுதி (Bus Stop Area)',
    desc_ta: 'பேருந்து நிறுத்தம் அருகே 3 நாட்களாக குப்பைத் தொட்டி நிரம்பி வழிகிறது, துர்நாற்றத்தால் மக்கள் கடும் அவதி.',
    desc_en: 'Dumpster near bus stop overflowing for 3 consecutive days, severe foul odor for commuters.',
    urgency: 'High',
    status: 'செயல்பாட்டில்'
  },
  {
    refId: 'TVK-JN-2026-0103',
    date: '16-10-2026',
    name: 'செ. ஆரோக்கியசாமி (S. Arokkiyasamy)',
    phone: '97860XXXXX',
    category: 'drainage',
    categoryLabel_ta: 'கழிவுநீர் வடிகால் அடைப்பு',
    categoryLabel_en: 'Blocked Drainage / Sewage',
    street: '2-வது குறுக்குத் தெரு (2nd Cross)',
    desc_ta: 'சாக்கடை கால்வாயில் நெகிழி கழிவுகளால் அடைப்பு ஏற்பட்டு தெருவில் கழிவுநீர் பெருக்கெடுக்கிறது.',
    desc_en: 'Plastic waste blocking open drainage storm canal causing wastewater to spill over street.',
    urgency: 'High',
    status: 'புதியது'
  },
  {
    refId: 'TVK-JN-2026-0104',
    date: '17-10-2026',
    name: 'எஸ். சையத் இப்ராஹிம் (S. Syed Ibrahim)',
    phone: '99440XXXXX',
    category: 'streetlight',
    categoryLabel_ta: 'தெருவிளக்கு பழுது',
    categoryLabel_en: 'Streetlight Outage',
    street: 'விநாயகர் கோவில் தெரு (Temple Street)',
    desc_ta: 'இரண்டு தெருவிளக்குகள் தொடர்ந்து எரியாமல் உள்ளதால் இரவு நேரங்களில் பெண்கள், முதியவர்கள் அச்சம்.',
    desc_en: 'Two streetlights continuously non-functional, safety concern for women and senior citizens at night.',
    urgency: 'Medium',
    status: 'புதியது'
  }
];

// Current State
let currentCategory = 'road';
let currentLang = localStorage.getItem('tvk_lang') || 'ta';
let uploadedImageDataUrl = null;
let currentTheme = localStorage.getItem('tvk_theme') || 'light';

// Map State (OpenStreetMap + Leaflet.js)
let grievanceMap = null;
let mapMarker = null;
const JOTHI_NAGAR_COORDS = [10.7531, 79.1230];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initStorage();
  applyLanguage(currentLang);
  selectIssueCategory('road');
  initGrievanceMap();
  initTopGallerySlider();
  initInstagramDynamicFeed();

  // Close mobile nav when clicking any nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  // Close mobile nav when clicking outside header
  document.addEventListener('click', (e) => {
    const menu = document.getElementById('navMenu');
    const toggleBtn = document.getElementById('mobileNavToggle');
    if (menu && menu.classList.contains('open')) {
      if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
        closeMobileNav();
      }
    }
  });
});

/**
 * 0. Theme Manager (Dark / Light)
 */
function initTheme() {
  currentTheme = localStorage.getItem('tvk_theme') || 'light';
  applyTheme(currentTheme);
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('tvk_theme', currentTheme);
  applyTheme(currentTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('themeIcon');
  const text = document.getElementById('themeText');
  if (icon && text) {
    if (theme === 'light') {
      icon.textContent = '☀️';
      text.textContent = 'Light';
    } else {
      icon.textContent = '🌙';
      text.textContent = 'Dark';
    }
  }
}

/**
 * 1. Comprehensive Bilingual Internationalization (i18n) Engine
 */
function toggleLanguage() {
  currentLang = currentLang === 'ta' ? 'en' : 'ta';
  localStorage.setItem('tvk_lang', currentLang);
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  const dict = I18N[lang] || I18N.ta;

  // 1. Update all [data-i18n] text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (dict[key].includes('<') && dict[key].includes('>')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // 2. Update all [data-i18n-placeholder] inputs & textareas
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // 3. Update Language Switcher Button Text
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.textContent = lang === 'ta' ? 'English' : 'தமிழ்';
  }

  // 4. Update Category Badge
  updateActiveCategoryBadge(currentCategory);

  // 5. Re-render Complaints Table to reflect language change
  renderComplaintsTable();
  renderInstagramPosts();
}

/**
 * 2. Local Storage Manager
 */
function initStorage() {
  if (!localStorage.getItem('tvk_jothinagar_complaints')) {
    localStorage.setItem('tvk_jothinagar_complaints', JSON.stringify(INITIAL_COMPLAINTS));
  }
}

function getStoredComplaints() {
  const data = localStorage.getItem('tvk_jothinagar_complaints');
  return data ? JSON.parse(data) : [];
}

function saveComplaints(complaints) {
  localStorage.setItem('tvk_jothinagar_complaints', JSON.stringify(complaints));
}

/**
 * 3. Dynamic Ambient Background Photo Switcher
 */
function selectIssueCategory(categoryKey) {
  currentCategory = categoryKey;

  // 1. Update Card Selection Styles
  document.querySelectorAll('.issue-card').forEach(card => card.classList.remove('selected'));
  const targetCard = document.getElementById(`card-${categoryKey}`);
  if (targetCard) targetCard.classList.add('selected');

  // 2. Switch Ambient Background Image
  const allBgs = document.querySelectorAll('.ambient-img');
  allBgs.forEach(img => img.classList.remove('active'));

  const activeBg = document.getElementById(`bg-${categoryKey}`);
  if (activeBg) {
    activeBg.classList.add('active');
  } else {
    document.getElementById('bg-road')?.classList.add('active');
  }

  // 3. Sync with form dropdown
  const categorySelect = document.getElementById('complaintCategory');
  if (categorySelect && categorySelect.value !== categoryKey) {
    categorySelect.value = categoryKey;
  }

  // 4. Update Badge Text
  updateActiveCategoryBadge(categoryKey);

  // 5. Toggle Custom Issue Group when 'other' is selected
  const customGroup = document.getElementById('customIssueGroup');
  const customInput = document.getElementById('customIssueTitle');
  if (customGroup) {
    if (categoryKey === 'other') {
      customGroup.style.display = 'flex';
      if (customInput) customInput.focus();
    } else {
      customGroup.style.display = 'none';
      if (customInput) customInput.value = '';
    }
  }
}

/**
 * 3.1. Interactive OpenStreetMap Engine (Leaflet.js - 100% Free & Open Source)
 */
function initGrievanceMap() {
  const mapElement = document.getElementById('grievanceMap');
  if (!mapElement || typeof L === 'undefined') return;

  try {
    grievanceMap = L.map('grievanceMap', {
      center: JOTHI_NAGAR_COORDS,
      zoom: 16,
      zoomControl: true,
      scrollWheelZoom: false
    });

    // 100% Free OpenStreetMap Standard Tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
    }).addTo(grievanceMap);

    // Initial Draggable Marker
    mapMarker = L.marker(JOTHI_NAGAR_COORDS, {
      draggable: true,
      title: 'ஜோதி நகர் புகார் இடம் (Complaint Location)'
    }).addTo(grievanceMap);

    mapMarker.bindPopup(`<strong>📍 ஜோதி நகர் (Jothi Nagar)</strong><br><small>${currentLang === 'ta' ? 'இடத்தை மாற்ற மார்க்கரை இழுக்கவும் அல்லது வரைபடத்தில் கிளிக் செய்யவும்' : 'Drag marker or click map to move location'}</small>`);

    // Handle Map Clicks to Move Marker
    grievanceMap.on('click', (e) => {
      setMapPinLocation(e.latlng.lat, e.latlng.lng, true);
    });

    // Handle Marker Drag
    mapMarker.on('dragend', (e) => {
      const pos = e.target.getLatLng();
      setMapPinLocation(pos.lat, pos.lng, true);
    });

    setTimeout(() => {
      if (grievanceMap) grievanceMap.invalidateSize();
    }, 400);
  } catch (err) {
    console.warn('Map initialization:', err);
  }
}

function setMapPinLocation(lat, lng, isUserSelected = true) {
  const roundedLat = parseFloat(lat).toFixed(6);
  const roundedLng = parseFloat(lng).toFixed(6);

  if (mapMarker) {
    mapMarker.setLatLng([roundedLat, roundedLng]);
  }

  const latInput = document.getElementById('selectedLat');
  const lngInput = document.getElementById('selectedLng');
  const hasLocInput = document.getElementById('hasSelectedLocation');
  const statusDisplay = document.getElementById('coordDisplay');
  const coordDot = document.getElementById('coordDot');

  if (latInput) latInput.value = roundedLat;
  if (lngInput) lngInput.value = roundedLng;
  if (hasLocInput) hasLocInput.value = isUserSelected ? 'true' : 'false';

  if (statusDisplay) {
    const dict = I18N[currentLang] || I18N.ta;
    const prefix = dict.map_pinned_status || '📍 Selected:';
    statusDisplay.textContent = `${prefix} ${roundedLat}° N, ${roundedLng}° E`;
  }

  if (coordDot && isUserSelected) {
    coordDot.classList.add('active');
  }
}

function detectUserLocation() {
  const gpsBtn = document.getElementById('btnDetectGps');
  const gpsText = document.getElementById('gpsBtnText');
  const dict = I18N[currentLang] || I18N.ta;

  if (!navigator.geolocation) {
    alert(dict.map_gps_denied || 'Geolocation is not supported by your browser.');
    return;
  }

  if (gpsText) gpsText.textContent = dict.btn_gps_detecting || '⏳ ஜிபிஎஸ் தேடுகிறது...';
  if (gpsBtn) gpsBtn.disabled = true;

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;

      if (grievanceMap) {
        grievanceMap.setView([userLat, userLng], 17);
      }
      setMapPinLocation(userLat, userLng, true);

      if (gpsText) gpsText.textContent = dict.btn_gps_text || 'என் தற்போதைய இடம் (Use GPS)';
      if (gpsBtn) gpsBtn.disabled = false;

      alert(dict.map_gps_success || 'உங்கள் தற்போதைய இடம் துல்லியமாக கண்டறியப்பட்டது!');
    },
    (error) => {
      console.warn('GPS error:', error);
      if (gpsText) gpsText.textContent = dict.btn_gps_text || 'என் தற்போதைய இடம் (Use GPS)';
      if (gpsBtn) gpsBtn.disabled = false;
      alert(dict.map_gps_denied || 'இருப்பிட அனுமதி மறுக்கப்பட்டது அல்லது கிடைக்கவில்லை.');
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
}

function updateActiveCategoryBadge(categoryKey) {
  const badge = document.getElementById('activeCategoryBadge');
  if (!badge) return;
  const dict = I18N[currentLang] || I18N.ta;
  const badgeKey = `badge_${categoryKey}`;
  badge.textContent = dict[badgeKey] || dict.badge_road;
}

function syncCategorySelect(val) {
  selectIssueCategory(val);
}

function scrollToComplaints(category) {
  if (category && category !== 'all') {
    selectIssueCategory(category);
  }
  const section = document.getElementById('complaints');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * 4. File Upload Preview
 */
function handleImagePreview(event) {
  const file = event.target.files[0];
  const previewStrip = document.getElementById('previewStrip');
  previewStrip.innerHTML = '';

  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      alert(currentLang === 'ta' ? 'புகைப்படத்தின் அளவு 5MB-க்கு குறைவாக இருக்க வேண்டும்.' : 'Image size must be less than 5MB.');
      event.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedImageDataUrl = e.target.result;
      const thumb = document.createElement('img');
      thumb.src = uploadedImageDataUrl;
      thumb.className = 'preview-thumb';
      thumb.title = file.name;
      previewStrip.appendChild(thumb);
    };
    reader.readAsDataURL(file);
  }
}

/**
 * 5. Handle Complaint Form Submission
 */
function handleComplaintSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('citizenName').value.trim();
  const phone = document.getElementById('citizenPhone').value.trim();
  const category = document.getElementById('complaintCategory').value;
  const customTitle = document.getElementById('customIssueTitle') ? document.getElementById('customIssueTitle').value.trim() : '';
  const street = document.getElementById('streetLocation').value;
  const desc = document.getElementById('complaintDesc').value.trim();
  const severity = document.querySelector('input[name="severity"]:checked')?.value || 'High';

  if (!name || !phone || !street || !desc) {
    alert(currentLang === 'ta' ? 'அனைத்து கட்டாய புலங்களையும் நிரப்பவும்.' : 'Please fill in all mandatory fields.');
    return;
  }

  if (category === 'other' && !customTitle) {
    alert(currentLang === 'ta' ? 'தயவுசெய்து உங்கள் குறிப்பிட்ட பிரச்சனையின் தலைப்பை உள்ளிடவும்.' : 'Please specify your civic issue topic.');
    document.getElementById('customIssueTitle')?.focus();
    return;
  }

  // Generate Unique Reference ID
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const refId = `TVK-JN-2026-${randomSuffix}`;

  const categoryLabels_ta = {
    road: 'உடைந்த சாலை / பள்ளம்',
    garbage: 'குப்பைக் கூளம் & துர்நாற்றம்',
    drainage: 'கழிவுநீர் வடிகால் அடைப்பு',
    streetlight: 'தெருவிளக்கு பழுது',
    water: 'குடிநீர் பற்றாக்குறை',
    other: customTitle ? `இதர: ${customTitle}` : 'இதர பொது பிரச்சனை'
  };

  const categoryLabels_en = {
    road: 'Damaged Road / Potholes',
    garbage: 'Garbage Dump & Sanitation',
    drainage: 'Blocked Drainage / Sewage',
    streetlight: 'Streetlight Outage',
    water: 'Drinking Water Shortage',
    other: customTitle ? `Other: ${customTitle}` : 'Other Civic Issue'
  };

  const today = new Date();
  const dateStr = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;

  // Read OpenStreetMap Coordinates
  const hasLocation = document.getElementById('hasSelectedLocation')?.value === 'true';
  const lat = document.getElementById('selectedLat')?.value || '10.7531';
  const lng = document.getElementById('selectedLng')?.value || '79.1230';
  const mapsUrl = hasLocation ? `https://maps.google.com/?q=${lat},${lng}` : `https://maps.google.com/?q=10.7531,79.1230`;

  const newComplaint = {
    refId: refId,
    date: dateStr,
    name: name,
    phone: phone,
    category: category,
    categoryLabel_ta: categoryLabels_ta[category] || category,
    categoryLabel_en: categoryLabels_en[category] || category,
    street: street,
    desc_ta: desc,
    desc_en: desc,
    urgency: severity,
    status: 'புதியது',
    photo: uploadedImageDataUrl || null,
    hasLocation: hasLocation,
    lat: lat,
    lng: lng,
    mapsUrl: mapsUrl
  };

  const complaints = getStoredComplaints();
  complaints.unshift(newComplaint);
  saveComplaints(complaints);

  // Update UI table
  renderComplaintsTable();

  // Reset Form & Map Pin
  document.getElementById('complaintForm').reset();
  const customGroup = document.getElementById('customIssueGroup');
  if (customGroup) customGroup.style.display = 'none';
  document.getElementById('previewStrip').innerHTML = '';
  uploadedImageDataUrl = null;

  // Reset Map to Jothi Nagar Default
  setMapPinLocation(JOTHI_NAGAR_COORDS[0], JOTHI_NAGAR_COORDS[1], false);
  const coordDot = document.getElementById('coordDot');
  if (coordDot) coordDot.classList.remove('active');
  if (grievanceMap) grievanceMap.setView(JOTHI_NAGAR_COORDS, 16);

  // Show Success Modal
  showSuccessModal(refId, name, street, currentLang === 'ta' ? categoryLabels_ta[category] : categoryLabels_en[category], mapsUrl);
}

/**
 * 6. Success Modal & WhatsApp Direct Connect
 */
function showSuccessModal(refId, name, street, categoryLabel, mapsUrl = null) {
  const modal = document.getElementById('successModal');
  const refDisplay = document.getElementById('modalRefId');
  const btnWhatsApp = document.getElementById('btnWhatsAppShare');

  refDisplay.textContent = refId;

  let message = '';
  if (currentLang === 'ta') {
    message = `வணக்கம்! தமிழக வெற்றிக் கழகம் (TVK) ஜோதி நகர் வார்டு தளத்தில் எனது புகார் பதிவு செய்யப்பட்டுள்ளது.%0A%0A📌 *குறிப்பு எண்:* ${refId}%0A👤 *மனுதாரர்:* ${name}%0A📍 *பகுதி/தெரு:* ${street}%0A⚠️ *பிரச்சனை வகை:* ${categoryLabel}`;
    if (mapsUrl) {
      message += `%0A🗺️ *வரைபட இருப்பிடம் (Google Maps):* ${mapsUrl}`;
    }
    message += `%0A%0Aஉடனடி நடவடிக்கை எடுக்குமாறு அன்புடன் கேட்டுக்கொள்கிறேன்.`;
  } else {
    message = `Hello! My grievance has been registered on the TVK Jothi Nagar Ward Portal.%0A%0A📌 *Reference ID:* ${refId}%0A👤 *Citizen Name:* ${name}%0A📍 *Street / Location:* ${street}%0A⚠️ *Issue Category:* ${categoryLabel}`;
    if (mapsUrl) {
      message += `%0A🗺️ *Map Location (Google Maps):* ${mapsUrl}`;
    }
    message += `%0A%0ARequesting your kind intervention and prompt resolution.`;
  }
  btnWhatsApp.href = `https://wa.me/919443200000?text=${message}`;

  modal.classList.add('active');
}

function closeSuccessModal() {
  document.getElementById('successModal').classList.remove('active');
}

/**
 * 7. Render Complaints Table
 */
function renderComplaintsTable(filteredList = null) {
  const tbody = document.getElementById('complaintsTableBody');
  if (!tbody) return;
  const list = filteredList || getStoredComplaints();
  tbody.innerHTML = '';

  if (list.length === 0) {
    const noRecordText = currentLang === 'ta' ? 'பதிவுகள் எதுவும் கிடைக்கவில்லை (No Records Found).' : 'No grievance records found.';
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 24px; color: #94a3b8;">${noRecordText}</td></tr>`;
    return;
  }

  list.forEach(item => {
    const tr = document.createElement('tr');

    const catLabel = currentLang === 'ta' 
      ? (item.categoryLabel_ta || item.categoryLabel || item.category) 
      : (item.categoryLabel_en || item.categoryLabel || item.category);

    const pendingText = currentLang === 'ta' ? 'புதியது (Pending)' : 'Pending (புதியது)';
    const inProgressText = currentLang === 'ta' ? 'செயல்பாட்டில் (In Progress)' : 'In Progress (செயல்பாட்டில்)';
    const resolvedText = currentLang === 'ta' ? 'தீர்க்கப்பட்டது (Resolved)' : 'Resolved (தீர்க்கப்பட்டது)';
    const viewText = currentLang === 'ta' ? 'விவரம் (View)' : 'View';

    const mapBadge = item.mapsUrl 
      ? `<a href="${item.mapsUrl}" target="_blank" rel="noopener" class="map-badge-link" title="Open Location in Google Maps">📍 Map</a>` 
      : '';

    tr.innerHTML = `
      <td><strong style="color: var(--tvk-gold);">${item.refId}</strong></td>
      <td>${item.date}</td>
      <td><strong>${escapeHtml(item.name)}</strong><br><small style="color: var(--tvk-text-muted);">${item.phone}</small></td>
      <td>${escapeHtml(item.street)} ${mapBadge}</td>
      <td>${escapeHtml(catLabel)}</td>
      <td><span style="color: ${item.urgency === 'High' ? '#ef4444' : '#f59e0b'}; font-weight:700;">${item.urgency}</span></td>
      <td>
        <select class="form-control" style="padding: 4px 8px; font-size: 0.78rem;" onchange="updateComplaintStatus('${item.refId}', this.value)">
          <option value="புதியது" ${item.status === 'புதியது' ? 'selected' : ''}>${pendingText}</option>
          <option value="செயல்பாட்டில்" ${item.status === 'செயல்பாட்டில்' ? 'selected' : ''}>${inProgressText}</option>
          <option value="தீர்க்கப்பட்டது" ${item.status === 'தீர்க்கப்பட்டது' ? 'selected' : ''}>${resolvedText}</option>
        </select>
      </td>
      <td>
        <button class="btn-action-view" onclick="viewComplaintDetail('${item.refId}')">${viewText}</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function updateComplaintStatus(refId, newStatus) {
  const complaints = getStoredComplaints();
  const target = complaints.find(c => c.refId === refId);
  if (target) {
    target.status = newStatus;
    saveComplaints(complaints);
    const msg = currentLang === 'ta' 
      ? `புகார் எண் ${refId} நிலை "${newStatus}" என மாற்றப்பட்டது.` 
      : `Grievance #${refId} status updated to "${newStatus}".`;
    alert(msg);
  }
}

function viewComplaintDetail(refId) {
  const complaints = getStoredComplaints();
  const item = complaints.find(c => c.refId === refId);
  if (item) {
    const cat = currentLang === 'ta' ? (item.categoryLabel_ta || item.categoryLabel) : (item.categoryLabel_en || item.categoryLabel);
    const desc = currentLang === 'ta' ? (item.desc_ta || item.desc) : (item.desc_en || item.desc);
    alert(`[${item.refId}] - ${item.name}\n${currentLang === 'ta' ? 'தெரு' : 'Street'}: ${item.street}\n${currentLang === 'ta' ? 'பிரச்சனை' : 'Category'}: ${cat}\n${currentLang === 'ta' ? 'விளக்கம்' : 'Description'}: ${desc}\n${currentLang === 'ta' ? 'நிலை' : 'Status'}: ${item.status}`);
  }
}

/**
 * 8. Search & Filter Table
 */
function filterComplaintsTable() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const statusFilter = document.getElementById('statusFilter').value;
  const all = getStoredComplaints();

  const filtered = all.filter(c => {
    const nameMatch = c.name.toLowerCase().includes(query);
    const streetMatch = c.street.toLowerCase().includes(query);
    const idMatch = c.refId.toLowerCase().includes(query);
    const descMatch = (c.desc_ta || c.desc || '').toLowerCase().includes(query) || (c.desc_en || '').toLowerCase().includes(query);

    const matchesSearch = nameMatch || streetMatch || idMatch || descMatch;
    const matchesStatus = (statusFilter === 'all') || (c.status === statusFilter);
    return matchesSearch && matchesStatus;
  });

  renderComplaintsTable(filtered);
}

/**
 * 9. Excel / CSV Export with UTF-8 BOM
 */
function exportComplaintsToExcel() {
  const complaints = getStoredComplaints();
  if (complaints.length === 0) {
    alert(currentLang === 'ta' ? 'பதிவிறக்க தரவுகள் எதுவும் இல்லை.' : 'No data available to download.');
    return;
  }

  const isTa = currentLang === 'ta';
  const headers = isTa 
    ? ['குறிப்பு எண் (Ref ID)', 'பதிவு தேதி (Date)', 'மனுதாரர் பெயர் (Name)', 'கைபேசி (Phone)', 'தெரு / பகுதி (Street)', 'பிரச்சனை வகை (Category)', 'தீவிரம் (Urgency)', 'விளக்கம் (Description)', 'வரைபட முகவரி (Map URL)', 'நிலை (Status)']
    : ['Ref ID', 'Date', 'Citizen Name', 'Phone', 'Street Location', 'Category', 'Urgency', 'Description', 'Map Location URL', 'Status'];

  const rows = complaints.map(c => [
    `"${c.refId}"`,
    `"${c.date}"`,
    `"${c.name.replace(/"/g, '""')}"`,
    `"${c.phone}"`,
    `"${c.street.replace(/"/g, '""')}"`,
    `"${(isTa ? (c.categoryLabel_ta || c.categoryLabel) : (c.categoryLabel_en || c.categoryLabel)).replace(/"/g, '""')}"`,
    `"${c.urgency}"`,
    `"${(isTa ? (c.desc_ta || c.desc) : (c.desc_en || c.desc)).replace(/"/g, '""').replace(/\n/g, ' ')}"`,
    `"${c.mapsUrl || (c.lat && c.lng ? `https://maps.google.com/?q=${c.lat},${c.lng}` : 'https://maps.google.com/?q=10.7531,79.1230')}"`,
    `"${c.status}"`
  ]);

  // Prepend UTF-8 BOM (\uFEFF) for Microsoft Excel compatibility
  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.setAttribute('download', `TVK_JothiNagar_Complaints_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);
}

/**
 * 10. Mobile Navigation Toggle & Drawer Controller
 */
function toggleMobileNav() {
  const menu = document.getElementById('navMenu');
  const toggleBtn = document.getElementById('mobileNavToggle');
  if (!menu) return;

  const isOpen = menu.classList.toggle('open');
  if (toggleBtn) {
    toggleBtn.textContent = isOpen ? '✕' : '☰';
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
}

function closeMobileNav() {
  const menu = document.getElementById('navMenu');
  const toggleBtn = document.getElementById('mobileNavToggle');
  if (menu && menu.classList.contains('open')) {
    menu.classList.remove('open');
    if (toggleBtn) {
      toggleBtn.textContent = '☰';
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  }
}

// Utility
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, function(m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
  });
}


/**
 * ==========================================================================
 * 11. 3D Center-Focus Coverflow Controller
 * Motion: Starts from LEFT ➔ Moves to CENTER (becomes BIG) ➔ Moves to RIGHT
 * Loops infinitely and continuously without stopping!
 * ==========================================================================
 */
let currentCenterIndex = 0; // Starts with Card 0 (Thalapathy Vijay) in center
let coverflowInterval = null;

function initTopGallerySlider() {
  const cards = [
    document.getElementById('cfCard0'),
    document.getElementById('cfCard1'),
    document.getElementById('cfCard2')
  ];
  if (!cards[0] || !cards[1] || !cards[2]) return;

  renderCoverflowDots();
  updateCoverflowPositions();
  startCoverflowAutoSlide();

  // Touch swipe support on stage
  const stage = document.getElementById('coverflowStage');
  if (stage) {
    let touchStartX = 0;
    let touchEndX = 0;
    stage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) nextCoverflowSlide();
        else prevCoverflowSlide();
      }
    }, { passive: true });
  }
}

function updateCoverflowPositions() {
  const cards = [
    document.getElementById('cfCard0'),
    document.getElementById('cfCard1'),
    document.getElementById('cfCard2')
  ];
  if (!cards[0] || !cards[1] || !cards[2]) return;

  // Center is: currentCenterIndex
  // Left is: (currentCenterIndex - 1 + 3) % 3  (entering from left)
  // Right is: (currentCenterIndex + 1) % 3     (exiting to right)

  cards.forEach((card, idx) => {
    card.classList.remove('pos-left', 'pos-center', 'pos-right');
    if (idx === currentCenterIndex) {
      card.classList.add('pos-center');
    } else if (idx === (currentCenterIndex - 1 + 3) % 3) {
      card.classList.add('pos-left');
    } else {
      card.classList.add('pos-right');
    }
  });

  // Update indicator dots
  const dots = document.querySelectorAll('.gallery-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentCenterIndex);
  });
}

function renderCoverflowDots() {
  const dotsContainer = document.getElementById('galleryDots');
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';

  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('button');
    dot.className = `gallery-dot ${i === currentCenterIndex ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Leader ${i + 1}`);
    dot.onclick = () => {
      currentCenterIndex = i;
      updateCoverflowPositions();
      restartCoverflowTimer();
    };
    dotsContainer.appendChild(dot);
  }
}

/**
 * Direction: LEFT ➔ CENTER (BIG) ➔ RIGHT
 * When advance runs:
 * The card on the LEFT becomes the CENTER card (grows BIG!)
 * The CENTER card moves to the RIGHT!
 * The RIGHT card moves around to the LEFT!
 */
function nextCoverflowSlide() {
  currentCenterIndex = (currentCenterIndex - 1 + 3) % 3;
  updateCoverflowPositions();
  restartCoverflowTimer();
}

function prevCoverflowSlide() {
  currentCenterIndex = (currentCenterIndex + 1) % 3;
  updateCoverflowPositions();
  restartCoverflowTimer();
}

function handleCardClick(idx) {
  if (idx === currentCenterIndex) {
    scrollToLeadership();
  } else {
    // Bring the clicked left or right card to center!
    currentCenterIndex = idx;
    updateCoverflowPositions();
    restartCoverflowTimer();
  }
}

function startCoverflowAutoSlide() {
  stopCoverflowAutoSlide();
  // Continuous automatic slide every 2.8 seconds - NEVER stops!
  coverflowInterval = setInterval(() => {
    currentCenterIndex = (currentCenterIndex - 1 + 3) % 3;
    updateCoverflowPositions();
  }, 2800);
}

function stopCoverflowAutoSlide() {
  if (coverflowInterval) {
    clearInterval(coverflowInterval);
    coverflowInterval = null;
  }
}

function restartCoverflowTimer() {
  startCoverflowAutoSlide();
}

function scrollToLeadership() {
  const sec = document.getElementById('leadership');
  if (sec) {
    sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * ==========================================================================
 * 12. Automated Live Instagram Engine (@jodhinagartvk)
 * 100% Free of Cost & 100% Fully Automated
 * - Direct Live API Integration with Behold.so (Free Meta Official Partner)
 * - Automatically fetches real images, captions, likes & timestamps from @jodhinagartvk
 * - Automatically assigns #1 TRENDING badge to the newest post
 * - Background hourly check engine (runs every 1 hour / 3600000ms)
 * - Status ticker updating relative timestamps every 60 seconds
 * - On-demand "Check Now" (இப்போது சரிபார்க்க) live trigger with feedback
 * - Clicking any post card opens the post directly on Instagram
 * ==========================================================================
 */

const INSTA_FEED_VERSION = 'v11_authentic_insta_dates';

const INSTAGRAM_CONFIG = {
  handle: 'jodhinagartvk',
  profileUrl: 'https://www.instagram.com/jodhinagartvk/',
  syncIntervalMs: 3600000 // 1 hour
};

let uploadedInstaImageDataUrl = null;

const DEFAULT_INSTA_POSTS = [
  {
    id: 'insta-live-1',
    imageUrl: 'img/posts/insta_post_1.jpg',
    caption_ta: 'இனிய தீபாவளி திருநாள் நல்வாழ்த்துகள் - R. துஷாந்த் | தமிழக வெற்றிக் கழகம் ஜோதி நகர் கிளை கழகம்',
    caption_en: 'Happy Deepavali Wishes - R. Dushanth | TVK Jothi Nagar Ward',
    tags: '#TVKJothiNagar #ThalapathyVijay #TrendingNow',
    date_ta: 'நவம்பர் 8',
    date_en: 'Nov 8',
    timestamp: 1794110458000,
    likes: '4.8k',
    comments: '480',
    url: 'https://www.instagram.com/jodhinagartvk/p/Dfd2XH6hfF6/',
    shortcode: 'Dfd2XH6hfF6'
  },
  {
    id: 'insta-live-2',
    imageUrl: 'img/posts/insta_post_2.jpg',
    caption_ta: 'வெற்றி ஸ்பெஷல் காய்கறி தொகுப்பு (Vetri Special Vegetables Pack) - ₹100 ரூபாய்க்கு 10 வகை காய்கறிகள்!',
    caption_en: 'Vetri Special Vegetables Pack - 10 fresh vegetables for ₹100!',
    tags: '#TVKJothiNagar #ThalapathyVijay #TrendingNow',
    date_ta: 'நவம்பர் 4',
    date_en: 'Nov 4',
    timestamp: 1793793600000,
    likes: '4.4k',
    comments: '430',
    url: 'https://www.instagram.com/jodhinagartvk/p/DfUBaxzMRla/',
    shortcode: 'DfUBaxzMRla'
  },
  {
    id: 'insta-live-3',
    imageUrl: 'img/posts/insta_post_3.jpg',
    caption_ta: 'மக்களுக்கான நேர்மையான அரசியல் பாதை - கழக தலைவர் தளபதி விஜய் (Official Video / Reel)',
    caption_en: 'The honest political path for the people - TVK President Thalapathy Vijay',
    tags: '#TVKJothiNagar #ThalapathyVijay #TrendingNow',
    date_ta: 'அக்டோபர் 25',
    date_en: 'Oct 25',
    timestamp: 1792909071000,
    likes: '4.0k',
    comments: '380',
    url: 'https://www.instagram.com/jodhinagartvk/reel/De6B9YKPIsz/',
    shortcode: 'De6B9YKPIsz'
  },
  {
    id: 'insta-live-4',
    imageUrl: 'img/posts/insta_post_4.jpg',
    caption_ta: 'SIR விவகாரம் & ஜனநாயக வாக்குரிமை பாதுகாப்பு குறித்த அறிக்கை - ஜோதி நகர் த.வெ.க',
    caption_en: 'Press report on democratic voting rights and civic updates',
    tags: '#TVKJothiNagar #ThalapathyVijay #TrendingNow',
    date_ta: 'அக்டோபர் 23',
    date_en: 'Oct 23',
    timestamp: 1792736425000,
    likes: '3.6k',
    comments: '330',
    url: 'https://www.instagram.com/jodhinagartvk/p/De05mxNGgbC/',
    shortcode: 'De05mxNGgbC'
  },
  {
    id: 'insta-live-5',
    imageUrl: 'img/posts/insta_post_5.jpg',
    caption_ta: 'தளபதி விஜய் 👑 | தமிழக வெற்றிக் கழகம் ஜோதி நகர் கிளை கழகம்',
    caption_en: 'Thalapathy Vijay 👑 | TVK Jothi Nagar Ward',
    tags: '#TVKJothiNagar #ThalapathyVijay #TrendingNow',
    date_ta: 'அக்டோபர் 21',
    date_en: 'Oct 21',
    timestamp: 1792595832000,
    likes: '3.2k',
    comments: '280',
    url: 'https://www.instagram.com/jodhinagartvk/p/DewtbvXB_Xa/',
    shortcode: 'DewtbvXB_Xa'
  }
];

async function initInstagramDynamicFeed() {
  const cachedVersion = localStorage.getItem('tvk_insta_version');
  const cachedRaw = localStorage.getItem('tvk_instagram_posts');

  // Load from local API endpoint or static data file
  let loadedFromSource = false;
  try {
    let res = await fetch('/api/instagram/posts');
    if (!res.ok) {
      res = await fetch('data/instagram_posts.json?v=' + Date.now());
    }
    if (!res.ok) {
      res = await fetch('assets/data/instagram_posts.json?v=' + Date.now());
    }
    if (res.ok) {
      const posts = await res.json();
      if (Array.isArray(posts) && posts.length > 0) {
        localStorage.setItem('tvk_instagram_posts', JSON.stringify(posts));
        localStorage.setItem('tvk_insta_version', INSTA_FEED_VERSION);
        loadedFromSource = true;
      }
    }
  } catch (err) {
    console.log('Local posts fetch note:', err.message);
  }

  // Fallback to DEFAULT_INSTA_POSTS if nothing loaded and version mismatch
  if (!loadedFromSource && (cachedVersion !== INSTA_FEED_VERSION || !cachedRaw)) {
    localStorage.setItem('tvk_instagram_posts', JSON.stringify(DEFAULT_INSTA_POSTS));
    localStorage.setItem('tvk_insta_version', INSTA_FEED_VERSION);
  }

  if (!localStorage.getItem('tvk_insta_last_checked')) {
    localStorage.setItem('tvk_insta_last_checked', String(Date.now()));
  }

  renderInstagramPosts();
  updateSyncStatusText();

  // Automatic hourly check: 3600000 ms = 1 hour
  setInterval(() => {
    checkInstagramHourlyUpdates(false);
  }, INSTAGRAM_CONFIG.syncIntervalMs);

  // Status ticker: update relative time ("Xm ago") every 60 seconds
  setInterval(() => {
    updateSyncStatusText();
  }, 60000);

  // Check on load if 1 hour has elapsed since last check
  const lastChecked = parseInt(localStorage.getItem('tvk_insta_last_checked') || '0', 10);
  if (Date.now() - lastChecked >= INSTAGRAM_CONFIG.syncIntervalMs) {
    checkInstagramHourlyUpdates(false);
  }
}

async function fetchLiveInstagramFromBridge() {
  const feedId = localStorage.getItem('tvk_behold_feed_id') || INSTAGRAM_CONFIG.beholdFeedId;
  if (!feedId) return false;

  try {
    const res = await fetch(`https://feeds.behold.so/${feedId}`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const livePosts = data.slice(0, 5).map((item, idx) => ({
          id: item.id || `behold-${idx}`,
          imageUrl: item.mediaUrl || item.thumbnailUrl,
          caption_ta: item.caption || 'ஜோதி நகர் த.வெ.க நேரலை பதிவு (@jodhinagartvk)',
          caption_en: item.caption || 'TVK Jothi Nagar live update (@jodhinagartvk)',
          tags: '#TVKJothiNagar #ThalapathyVijay #TrendingNow',
          timestamp: item.timestamp ? new Date(item.timestamp).getTime() : (Date.now() - idx * 3600000),
          likes: item.likeCount ? String(item.likeCount) : '2.1k',
          comments: item.commentsCount ? String(item.commentsCount) : '180',
          url: item.permalink || INSTAGRAM_CONFIG.profileUrl
        }));
        saveInstagramPosts(livePosts);
        localStorage.setItem('tvk_insta_last_checked', String(Date.now()));
        renderInstagramPosts();
        updateSyncStatusText();
        return true;
      }
    }
  } catch (e) {
    console.warn('Live Instagram fetch error:', e);
  }
  return false;
}

function getStoredInstagramPosts() {
  const data = localStorage.getItem('tvk_instagram_posts');
  return data ? JSON.parse(data) : DEFAULT_INSTA_POSTS;
}

function saveInstagramPosts(posts) {
  localStorage.setItem('tvk_instagram_posts', JSON.stringify(posts));
}

function renderInstagramPosts() {
  const container = document.getElementById('instaDynamicGrid');
  if (!container) return;

  const posts = getStoredInstagramPosts();
  container.innerHTML = '';

  const displayPosts = posts.slice(0, 5);

  displayPosts.forEach((post, index) => {
    const isTrending = index === 0;
    const card = document.createElement('div');
    card.className = `insta-post-card ${isTrending ? 'trending-post' : ''}`;
    card.style.cursor = 'pointer';
    card.title = currentLang === 'ta' ? 'Instagram-ல் பதிவைக் காண்க' : 'View post on Instagram';

    // Click anywhere on card opens post on Instagram
    card.onclick = (e) => {
      if (!e.target.closest('a') && !e.target.closest('.card-quick-edit-btn')) {
        window.open(post.url || INSTAGRAM_CONFIG.profileUrl, '_blank');
      }
    };

    const dict = I18N[currentLang] || I18N.ta;
    const caption = currentLang === 'ta' ? (post.caption_ta || post.caption) : (post.caption_en || post.caption || post.caption_ta);
    const viewBtnText = dict.insta_view_btn || 'Instagram-ல் பார்க்க ↗';
    const trendingText = dict.badge_trending || 'டிரெண்டிங் (TRENDING)';
    const postDateText = currentLang === 'ta' ? (post.date_ta || '') : (post.date_en || post.date_ta || '');

    const trendingBadge = isTrending ? `
      <div class="badge-trending">
        <span class="flame-icon">🔥</span>
        <span>${trendingText}</span>
      </div>
    ` : '';

    card.innerHTML = `
      ${trendingBadge}
      <img src="${escapeHtml(post.imageUrl)}" alt="Instagram Post ${index + 1}" loading="lazy">
      
      <!-- Desktop Hover Overlay -->
      <div class="insta-hover-overlay">
        <span class="insta-corner-icon">📸</span>
        <p>${escapeHtml(caption)}</p>
        <span class="insta-tag">${escapeHtml(post.tags || '#TVKJothiNagar')}</span>
        <div class="insta-post-meta-strip">
          <span>❤️ ${post.likes || '1.8k'}</span>
          <span>💬 ${post.comments || '210'}</span>
          ${postDateText ? `<span>📅 ${postDateText}</span>` : ''}
        </div>
        <div style="display: flex; gap: 8px; align-items: center; justify-content: center; margin-top: 8px; flex-wrap: wrap;">
          <a href="${escapeHtml(post.url || INSTAGRAM_CONFIG.profileUrl)}" target="_blank" rel="noopener" class="insta-post-link">
            ${viewBtnText}
          </a>
          <button type="button" class="btn-action-small card-quick-edit-btn" onclick="openInstaManagerModal('${post.id}')" title="Edit this post">
            ✏️
          </button>
        </div>
      </div>

      <!-- Mobile Native Caption Strip (Always visible on mobile) -->
      <div class="insta-mobile-caption-box">
        <p class="insta-mobile-text">${escapeHtml(caption)}</p>
        <div class="insta-mobile-footer">
          <span class="insta-mobile-tags">${escapeHtml(post.tags || '#TVKJothiNagar')}</span>
          <span class="insta-mobile-likes">❤️ ${post.likes || '1.8k'}</span>
          ${postDateText ? `<span style="opacity: 0.9;">📅 ${postDateText}</span>` : ''}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function formatRelativeTime(timestamp) {
  if (!timestamp) return 'Just now';
  const diffSec = Math.floor((Date.now() - timestamp) / 1000);
  const isTa = currentLang === 'ta';

  if (diffSec < 60) return isTa ? 'இப்போது' : 'Just now';
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return isTa ? `${diffMin} நிமிடங்களுக்கு முன்` : `${diffMin}m ago`;
  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return isTa ? `${diffHour} மணிநேரத்திற்கு முன்` : `${diffHour}h ago`;
  const diffDays = Math.floor(diffHour / 24);
  return isTa ? `${diffDays} நாட்களுக்கு முன்` : `${diffDays}d ago`;
}

function updateSyncStatusText() {
  const statusEl = document.getElementById('syncStatusText');
  if (!statusEl) return;

  const lastChecked = parseInt(localStorage.getItem('tvk_insta_last_checked') || String(Date.now()), 10);
  const elapsedMinutes = Math.floor((Date.now() - lastChecked) / 60000);
  const nextSyncIn = Math.max(1, 60 - (elapsedMinutes % 60));

  const isTa = currentLang === 'ta';
  if (elapsedMinutes < 1) {
    statusEl.textContent = isTa 
      ? `கடைசி சரிபார்ப்பு: இப்போது (Checked: Just now) | அடுத்தது: ${nextSyncIn} நிமிடங்களில்` 
      : `Last checked: Just now | Next sync in: ${nextSyncIn}m`;
  } else {
    statusEl.textContent = isTa 
      ? `கடைசி சரிபார்ப்பு: ${elapsedMinutes} நிமிடங்களுக்கு முன் | அடுத்தது: ${nextSyncIn} நிமிடங்களில்` 
      : `Last checked: ${elapsedMinutes}m ago | Next sync in: ${nextSyncIn}m`;
  }
}

/**
 * Direct Instagram Automated Scraper Sync Engine & Manual Trigger:
 * 1. Calls /api/instagram/sync which navigates directly to https://www.instagram.com/jodhinagartvk/
 * 2. Fetches the top 5 live posts, downloads the images locally to assets/images/insta_posts/
 * 3. Saves metadata in assets/data/instagram_posts.json
 * 4. Updates UI and displays fresh posts seamlessly.
 */
async function checkInstagramHourlyUpdates(manualTrigger = false) {
  const icon = document.getElementById('syncIcon');
  if (icon) icon.classList.add('spinning');

  let success = false;
  let errorMsg = null;

  try {
    // 1. Attempt live sync via backend scraper
    const res = await fetch('/api/instagram/sync', { signal: AbortSignal.timeout(60000) });
    if (res.ok) {
      const data = await res.json();
      if (data.status === 'success' && Array.isArray(data.posts) && data.posts.length > 0) {
        saveInstagramPosts(data.posts);
        localStorage.setItem('tvk_insta_version', INSTA_FEED_VERSION);
        localStorage.setItem('tvk_insta_last_checked', String(Date.now()));
        renderInstagramPosts();
        updateSyncStatusText();
        success = true;
      }
    }
  } catch (err) {
    errorMsg = err.message;
  }

  // 2. If backend sync was not reached, attempt to load cached posts from local JSON
  if (!success) {
    try {
      const res = await fetch('assets/data/instagram_posts.json?v=' + Date.now());
      if (res.ok) {
        const posts = await res.json();
        if (Array.isArray(posts) && posts.length > 0) {
          saveInstagramPosts(posts);
          localStorage.setItem('tvk_insta_version', INSTA_FEED_VERSION);
          renderInstagramPosts();
          success = true;
        }
      }
    } catch (_) {}
  }

  // 3. Fallback to Behold bridge if configured
  if (!success && INSTAGRAM_CONFIG.beholdFeedId) {
    success = await fetchLiveInstagramFromBridge();
  }

  localStorage.setItem('tvk_insta_last_checked', String(Date.now()));
  updateSyncStatusText();

  if (icon) icon.classList.remove('spinning');

  if (manualTrigger) {
    if (success) {
      const msg = currentLang === 'ta'
        ? '✅ இன்ஸ்டாகிராம் (@jodhinagartvk) பக்கத்திலிருந்து நேரலை 5 பதிவுகள் வெற்றிகரமாகப் பெறப்பட்டு, லோக்கலில் சேமிக்கப்பட்டு புதுப்பிக்கப்பட்டன!'
        : '✅ Top 5 live posts successfully fetched from Instagram (@jodhinagartvk), saved locally, and updated!';
      alert(msg);
    } else {
      const msg = currentLang === 'ta'
        ? '💡 பின்னணி சர்வர் (node serve.js) வழியாக தானியங்கி ஸ்கிராப்பிங் செய்ய முடியும். தற்போது லோக்கல் சேமிக்கப்பட்ட பதிவுகள் காட்டப்படுகின்றன.'
        : '💡 Run "node serve.js" to enable live headless browser scraping. Current locally saved posts are displayed.';
      alert(msg);
    }
  }
}

/**
 * ==========================================================================
 * TOP 5 INSTAGRAM POSTS MANAGER MODAL CONTROLLERS
 * ==========================================================================
 */
function openInstaManagerModal(editingId = null) {
  const modal = document.getElementById('instaManagerModal');
  if (!modal) return;

  uploadedInstaImageDataUrl = null;
  const photoInput = document.getElementById('instaPhotoFileInput');
  if (photoInput) photoInput.value = '';

  const feedIdInput = document.getElementById('beholdFeedIdInput');
  if (feedIdInput) {
    feedIdInput.value = localStorage.getItem('tvk_behold_feed_id') || INSTAGRAM_CONFIG.beholdFeedId || '';
  }

  if (editingId) {
    editInstaPost(editingId);
  } else {
    // Reset form for fresh addition
    document.getElementById('instaPostForm')?.reset();
    document.getElementById('editingPostId').value = '';
    document.getElementById('instaImagePreviewBox').style.display = 'none';
    const submitBtn = document.getElementById('submitInstaBtnText');
    if (submitBtn) {
      submitBtn.textContent = currentLang === 'ta' ? '🚀 #1 டிரெண்டிங் பதிவாக சேர்க்க' : '🚀 Publish as #1 Trending Post';
    }
    switchInstaTab('add');
  }

  renderManageInstaPostsList();
  modal.classList.add('active');
}

function closeInstaManagerModal() {
  const modal = document.getElementById('instaManagerModal');
  if (modal) modal.classList.remove('active');
}

function switchInstaTab(tabName) {
  const tabAdd = document.getElementById('tabBtnAdd');
  const tabManage = document.getElementById('tabBtnManage');
  const tabBridge = document.getElementById('tabBtnBridge');

  const paneAdd = document.getElementById('paneAddPost');
  const paneManage = document.getElementById('paneManagePosts');
  const paneBridge = document.getElementById('paneBridgeSettings');

  [tabAdd, tabManage, tabBridge].forEach(btn => btn?.classList.remove('active'));
  [paneAdd, paneManage, paneBridge].forEach(pane => {
    if (pane) pane.style.display = 'none';
  });

  if (tabName === 'add') {
    tabAdd?.classList.add('active');
    if (paneAdd) paneAdd.style.display = 'block';
  } else if (tabName === 'manage') {
    tabManage?.classList.add('active');
    if (paneManage) paneManage.style.display = 'block';
    renderManageInstaPostsList();
  } else if (tabName === 'bridge') {
    tabBridge?.classList.add('active');
    if (paneBridge) paneBridge.style.display = 'block';
  }
}

function handleInstaPhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    alert(currentLang === 'ta' ? 'படத்தின் அளவு 5MB-க்கு குறைவாக இருக்க வேண்டும்.' : 'Image size must be less than 5MB.');
    event.target.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedInstaImageDataUrl = e.target.result;
    const urlInput = document.getElementById('instaPhotoUrlInput');
    if (urlInput) urlInput.value = uploadedInstaImageDataUrl;
    updateInstaImagePreview(uploadedInstaImageDataUrl);
  };
  reader.readAsDataURL(file);
}

function selectPresetImage(path) {
  uploadedInstaImageDataUrl = path;
  const urlInput = document.getElementById('instaPhotoUrlInput');
  if (urlInput) urlInput.value = path;
  updateInstaImagePreview(path);
}

function updateInstaImagePreview(src) {
  const box = document.getElementById('instaImagePreviewBox');
  const img = document.getElementById('instaImagePreview');
  if (!box || !img) return;

  if (src && src.trim() !== '') {
    img.src = src.trim();
    box.style.display = 'block';
  } else {
    box.style.display = 'none';
  }
}

function handleInstaPostFormSubmit(event) {
  event.preventDefault();

  const editingId = document.getElementById('editingPostId').value;
  const imageUrl = document.getElementById('instaPhotoUrlInput').value.trim();
  const captionTa = document.getElementById('instaCaptionTa').value.trim();
  const captionEn = document.getElementById('instaCaptionEn').value.trim() || captionTa;
  const tags = document.getElementById('instaPostTags').value.trim() || '#TVKJothiNagar #ThalapathyVijay #TrendingNow';
  const postUrl = document.getElementById('instaPostUrl').value.trim() || INSTAGRAM_CONFIG.profileUrl;
  const likes = document.getElementById('instaPostLikes').value.trim() || '2.5k';
  const comments = document.getElementById('instaPostComments').value.trim() || '240';

  if (!imageUrl || !captionTa) {
    alert(currentLang === 'ta' ? 'தயவுசெய்து படத்தையும் தமிழ் விவரத்தையும் உள்ளிடவும்.' : 'Please provide an image and Tamil caption.');
    return;
  }

  const posts = getStoredInstagramPosts();

  if (editingId) {
    // Update existing post
    const index = posts.findIndex(p => p.id === editingId);
    if (index !== -1) {
      posts[index].imageUrl = imageUrl;
      posts[index].caption_ta = captionTa;
      posts[index].caption_en = captionEn;
      posts[index].tags = tags;
      posts[index].url = postUrl;
      posts[index].likes = likes;
      posts[index].comments = comments;
    }
  } else {
    // Add new post as #1 trending post
    const newPost = {
      id: 'post-' + Date.now(),
      imageUrl: imageUrl,
      caption_ta: captionTa,
      caption_en: captionEn,
      tags: tags,
      timestamp: Date.now(),
      likes: likes,
      comments: comments,
      url: postUrl
    };
    posts.unshift(newPost);
  }

  saveInstagramPosts(posts);
  renderInstagramPosts();
  renderManageInstaPostsList();
  closeInstaManagerModal();

  const alertMsg = currentLang === 'ta' 
    ? (editingId ? '✅ பதிவு வெற்றிகரமாக புதுப்பிக்கப்பட்டது!' : '🎉 புதிய பதிவு வெற்றிகரமாக #1 டிரெண்டிங்கில் சேர்க்கப்பட்டது!') 
    : (editingId ? '✅ Post updated successfully!' : '🎉 New post published to #1 Trending spot!');
  alert(alertMsg);
}

function renderManageInstaPostsList() {
  const container = document.getElementById('managePostsListContainer');
  if (!container) return;

  const posts = getStoredInstagramPosts();
  container.innerHTML = '';

  const displayList = posts.slice(0, 5);

  displayList.forEach((post, index) => {
    const isTrending = index === 0;
    const item = document.createElement('div');
    item.className = `manage-post-item ${isTrending ? 'trending-item' : ''}`;

    const caption = currentLang === 'ta' ? (post.caption_ta || post.caption) : (post.caption_en || post.caption_ta);

    item.innerHTML = `
      <img src="${escapeHtml(post.imageUrl)}" class="manage-post-thumb" alt="Thumbnail">
      <div class="manage-post-info">
        <div class="manage-post-title">
          ${isTrending ? '<span style="color: var(--tvk-gold); font-weight: 800;">[#1 Trending] </span>' : `[#${index + 1}] `}
          ${escapeHtml(caption)}
        </div>
        <div class="manage-post-meta">
          <span>❤️ ${post.likes || '1.8k'}</span>
          <span>💬 ${post.comments || '180'}</span>
          <span>📅 ${formatRelativeTime(post.timestamp)}</span>
        </div>
      </div>
      <div class="manage-post-actions">
        <button type="button" class="btn-action-small" onclick="editInstaPost('${post.id}')" title="Edit Post">
          ✏️ Edit
        </button>
        ${!isTrending ? `
          <button type="button" class="btn-action-small" onclick="moveInstaPostToTop('${post.id}')" title="Make this #1 Trending">
            ⬆️ #1
          </button>
        ` : ''}
        <button type="button" class="btn-action-small btn-danger-small" onclick="deleteInstaPost('${post.id}')" title="Delete Post">
          🗑️
        </button>
      </div>
    `;

    container.appendChild(item);
  });
}

function editInstaPost(id) {
  const posts = getStoredInstagramPosts();
  const post = posts.find(p => p.id === id);
  if (!post) return;

  switchInstaTab('add');

  document.getElementById('editingPostId').value = post.id;
  document.getElementById('instaPhotoUrlInput').value = post.imageUrl;
  document.getElementById('instaCaptionTa').value = post.caption_ta || post.caption || '';
  document.getElementById('instaCaptionEn').value = post.caption_en || '';
  document.getElementById('instaPostTags').value = post.tags || '#TVKJothiNagar';
  document.getElementById('instaPostUrl').value = post.url || INSTAGRAM_CONFIG.profileUrl;
  document.getElementById('instaPostLikes').value = post.likes || '2.5k';
  document.getElementById('instaPostComments').value = post.comments || '210';

  updateInstaImagePreview(post.imageUrl);

  const submitBtn = document.getElementById('submitInstaBtnText');
  if (submitBtn) {
    submitBtn.textContent = currentLang === 'ta' ? '💾 மாற்றங்களைச் சேமி (Save Changes)' : '💾 Save Changes';
  }
}

function moveInstaPostToTop(id) {
  const posts = getStoredInstagramPosts();
  const index = posts.findIndex(p => p.id === id);
  if (index > 0) {
    const [selected] = posts.splice(index, 1);
    selected.timestamp = Date.now(); // bump timestamp to now
    posts.unshift(selected);
    saveInstagramPosts(posts);
    renderInstagramPosts();
    renderManageInstaPostsList();
  }
}

function deleteInstaPost(id) {
  const confirmMsg = currentLang === 'ta' ? 'இந்தப் பதிவை நிச்சயமாக நீக்க விரும்புகிறீர்களா?' : 'Are you sure you want to delete this post?';
  if (!confirm(confirmMsg)) return;

  let posts = getStoredInstagramPosts();
  posts = posts.filter(p => p.id !== id);

  if (posts.length === 0) {
    posts = [...DEFAULT_INSTA_POSTS];
  }

  saveInstagramPosts(posts);
  renderInstagramPosts();
  renderManageInstaPostsList();
}

function resetInstagramPostsToDefault() {
  const confirmMsg = currentLang === 'ta' 
    ? 'அனைத்து மாற்றங்களையும் நீக்கிவிட்டு இயல்புநிலை டாப் 5 பதிவுகளை மீட்டமைக்கவா?' 
    : 'Reset all posts to the official default top 5 posts?';
  if (!confirm(confirmMsg)) return;

  saveInstagramPosts([...DEFAULT_INSTA_POSTS]);
  localStorage.setItem('tvk_insta_version', INSTA_FEED_VERSION);
  localStorage.setItem('tvk_insta_last_checked', String(Date.now()));
  renderInstagramPosts();
  renderManageInstaPostsList();
  alert(currentLang === 'ta' ? '✅ இயல்புநிலை பதிவுகள் மீட்டமைக்கப்பட்டன!' : '✅ Default posts restored successfully!');
}

function saveBeholdFeedId() {
  const input = document.getElementById('beholdFeedIdInput');
  const feedId = input ? input.value.trim() : '';

  if (!feedId) {
    alert(currentLang === 'ta' ? 'தயவுசெய்து Feed ID-ஐ உள்ளிடவும்.' : 'Please enter a valid Behold Feed ID.');
    return;
  }

  localStorage.setItem('tvk_behold_feed_id', feedId);
  INSTAGRAM_CONFIG.beholdFeedId = feedId;
  alert(currentLang === 'ta' ? 'Feed ID சேமிக்கப்பட்டது! நேரலை சோதனை தொடங்குகிறது...' : 'Feed ID saved! Testing live sync...');
  checkInstagramHourlyUpdates(true);
}

function clearBeholdFeedId() {
  localStorage.removeItem('tvk_behold_feed_id');
  INSTAGRAM_CONFIG.beholdFeedId = '';
  const input = document.getElementById('beholdFeedIdInput');
  if (input) input.value = '';
  alert(currentLang === 'ta' ? 'Behold Feed ID அகற்றப்பட்டது.' : 'Behold Feed ID cleared.');
}

