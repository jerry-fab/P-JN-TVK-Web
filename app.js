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
      <td>${catLabel}</td>
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
