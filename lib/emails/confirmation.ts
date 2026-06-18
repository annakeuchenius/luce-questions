const LINKEDIN_URL =
  "https://www.linkedin.com/company/lung-cancer-europe/posts/?feedView=all";
const INSTAGRAM_URL = "https://www.instagram.com/lungcancereurope/";

export interface EmailStrings {
  subject: string;
  greeting: string;        // uses {firstName} {lastName}
  thankYou: string;
  mailingListUpdate: string; // only shown if mailingListOptIn is true
  followUs: string;        // uses {linkedin} and {instagram} placeholders
  signOff: string;
}

// ─── English (source) ────────────────────────────────────────────────────────

const en: EmailStrings = {
  subject: "Thank you for contributing to the Lung Cancer Europe Chatbot",
  greeting: "Hi {firstName} {lastName},",
  thankYou:
    "Thank you for taking the time to share your questions with us — it means a lot, and it will directly shape what we build.",
  mailingListUpdate:
    "You've opted in to receive updates on the project. We'll be in touch as things develop — we're aiming for a launch to test in November, during Lung Cancer Awareness Month.",
  followUs:
    "Follow us on {linkedin} and {instagram} for news from Lung Cancer Europe, including updates on the AI assistant as it takes shape.",
  signOff: "Warm regards,<br><br>Anna Keuchenius on behalf of the chatbot team<br>Lung Cancer Europe",
};

// ─── German ──────────────────────────────────────────────────────────────────

const de: EmailStrings = {
  subject: "Vielen Dank für Ihren Beitrag zum LuCE-Chatbot",
  greeting: "Hallo {firstName} {lastName},",
  thankYou:
    "Vielen Dank, dass Sie sich die Zeit genommen haben, Ihre Fragen mit uns zu teilen — das bedeutet uns sehr viel und wird direkt beeinflussen, was wir entwickeln.",
  mailingListUpdate:
    "Sie haben sich für Updates zum Projekt angemeldet. Wir werden uns melden, wenn es Neuigkeiten gibt — wir planen einen Teststart im November, während des Lungenkrebsbewusstseinsmonats.",
  followUs:
    "Folgen Sie uns auf {linkedin} und {instagram} für Neuigkeiten von Lung Cancer Europe, einschließlich Updates zum KI-Assistenten.",
  signOff: "Mit freundlichen Grüßen,<br><br>Anna Keuchenius im Namen des Chatbot-Teams<br>Lung Cancer Europe",
};

// ─── French ──────────────────────────────────────────────────────────────────

const fr: EmailStrings = {
  subject: "Merci pour votre contribution au chatbot LuCE",
  greeting: "Bonjour {firstName} {lastName},",
  thankYou:
    "Merci d'avoir pris le temps de partager vos questions avec nous — cela compte beaucoup et influencera directement ce que nous allons créer.",
  mailingListUpdate:
    "Vous avez choisi de recevoir des mises à jour sur le projet. Nous vous contacterons au fur et à mesure — nous visons un lancement test en novembre, pendant le Mois de sensibilisation au cancer du poumon.",
  followUs:
    "Suivez-nous sur {linkedin} et {instagram} pour les actualités de Lung Cancer Europe, y compris les mises à jour sur l'assistant IA.",
  signOff: "Chaleureusement,<br><br>Anna Keuchenius au nom de l'équipe chatbot<br>Lung Cancer Europe",
};

// ─── Italian ─────────────────────────────────────────────────────────────────

const it: EmailStrings = {
  subject: "Grazie per il tuo contributo al chatbot LuCE",
  greeting: "Ciao {firstName} {lastName},",
  thankYou:
    "Grazie per aver dedicato del tempo a condividere le tue domande con noi — significa molto e influenzerà direttamente ciò che costruiremo.",
  mailingListUpdate:
    "Hai scelto di ricevere aggiornamenti sul progetto. Ti contatteremo man mano che le cose si sviluppano — puntiamo a un lancio di prova a novembre, durante il Mese di sensibilizzazione sul cancro al polmone.",
  followUs:
    "Seguici su {linkedin} e {instagram} per le notizie di Lung Cancer Europe, inclusi gli aggiornamenti sull'assistente AI.",
  signOff: "Cordiali saluti,<br><br>Anna Keuchenius a nome del team chatbot<br>Lung Cancer Europe",
};

// ─── Dutch ───────────────────────────────────────────────────────────────────

const nl: EmailStrings = {
  subject: "Bedankt voor uw bijdrage aan de LuCE-chatbot",
  greeting: "Hallo {firstName} {lastName},",
  thankYou:
    "Bedankt dat u de tijd heeft genomen om uw vragen met ons te delen — dat betekent veel voor ons en zal rechtstreeks van invloed zijn op wat we bouwen.",
  mailingListUpdate:
    "U heeft zich aangemeld voor updates over het project. We nemen contact op naarmate de zaken vorderen — we streven naar een testlancering in november, tijdens de Maand van bewustwording over longkanker.",
  followUs:
    "Volg ons op {linkedin} en {instagram} voor nieuws van Lung Cancer Europe, inclusief updates over de AI-assistent.",
  signOff: "Met vriendelijke groeten,<br><br>Anna Keuchenius namens het chatbot-team<br>Lung Cancer Europe",
};

// ─── Polish ──────────────────────────────────────────────────────────────────

const pl: EmailStrings = {
  subject: "Dziękujemy za wkład w chatbota LuCE",
  greeting: "Cześć {firstName} {lastName},",
  thankYou:
    "Dziękujemy za poświęcenie czasu na podzielenie się z nami swoimi pytaniami — to dla nas bardzo wiele znaczy i bezpośrednio wpłynie na to, co tworzymy.",
  mailingListUpdate:
    "Wyraziłeś/-aś zgodę na otrzymywanie aktualizacji dotyczących projektu. Będziemy w kontakcie w miarę postępów — planujemy uruchomienie testowe w listopadzie, podczas Miesiąca Świadomości Raka Płuc.",
  followUs:
    "Śledź nas na {linkedin} i {instagram}, aby być na bieżąco z wiadomościami od Lung Cancer Europe, w tym aktualizacjami dotyczącymi asystenta AI.",
  signOff: "Z poważaniem,<br><br>Anna Keuchenius w imieniu zespołu chatbota<br>Lung Cancer Europe",
};

// ─── Spanish ─────────────────────────────────────────────────────────────────

const es: EmailStrings = {
  subject: "Gracias por contribuir al Chatbot de LuCE",
  greeting: "Hola {firstName} {lastName},",
  thankYou:
    "Gracias por dedicar tu tiempo a compartir tus preguntas con nosotros. Lo valoramos mucho, ya que nos ayudarán a dar forma a lo que estamos construyendo.",
  mailingListUpdate:
    "Has elegido recibir actualizaciones sobre el proyecto, por lo que te mantendremos informado a medida que avancemos. Nuestro objetivo es lanzar una versión piloto en noviembre, coincidiendo con el Mes de Concienciación sobre el Cáncer de Pulmón.",
  followUs:
    "También puedes seguirnos en {linkedin} e {instagram} para estar al día de las novedades de Lung Cancer Europe, incluidas las actualizaciones sobre el asistente de IA.",
  signOff: "Un cordial saludo,<br><br>Anna Keuchenius en nombre del equipo del chatbot<br>Lung Cancer Europe",
};

// ─── Swedish ─────────────────────────────────────────────────────────────────

const sv: EmailStrings = {
  subject: "Tack för ditt bidrag till LuCE-chatboten",
  greeting: "Hej {firstName} {lastName},",
  thankYou:
    "Tack för att du tog dig tid att dela dina frågor med oss — det betyder mycket och kommer direkt att forma vad vi bygger.",
  mailingListUpdate:
    "Du har valt att ta emot uppdateringar om projektet. Vi hör av oss när saker och ting utvecklas — vi siktar på en testlansering i november, under Lungcancermedvetenhetsmånaden.",
  followUs:
    "Följ oss på {linkedin} och {instagram} för nyheter från Lung Cancer Europe, inklusive uppdateringar om AI-assistenten.",
  signOff: "Vänliga hälsningar,<br><br>Anna Keuchenius på uppdrag av chatbot-teamet<br>Lung Cancer Europe",
};

// ─── Danish ──────────────────────────────────────────────────────────────────

const da: EmailStrings = {
  subject: "Tak for dit bidrag til LuCE-chatbotten",
  greeting: "Hej {firstName} {lastName},",
  thankYou:
    "Tak fordi du tog dig tid til at dele dine spørgsmål med os — det betyder meget, og det vil direkte forme, hvad vi bygger.",
  mailingListUpdate:
    "Du har valgt at modtage opdateringer om projektet. Vi vender tilbage, efterhånden som tingene udvikler sig — vi sigter efter en testlancering i november under Lungekræftbevidsthedsmåneden.",
  followUs:
    "Følg os på {linkedin} og {instagram} for nyheder fra Lung Cancer Europe, herunder opdateringer om AI-assistenten.",
  signOff: "Med venlig hilsen,<br><br>Anna Keuchenius på vegne af chatbot-teamet<br>Lung Cancer Europe",
};

// ─── Norwegian ───────────────────────────────────────────────────────────────

const no: EmailStrings = {
  subject: "Takk for ditt bidrag til LuCE-chatboten",
  greeting: "Hei {firstName} {lastName},",
  thankYou:
    "Takk for at du tok deg tid til å dele spørsmålene dine med oss — det betyr mye, og vil direkte forme det vi bygger.",
  mailingListUpdate:
    "Du har valgt å motta oppdateringer om prosjektet. Vi tar kontakt etter hvert som ting utvikler seg — vi sikter på en testlansering i november, under Lungekreftbevissthetsmåneden.",
  followUs:
    "Følg oss på {linkedin} og {instagram} for nyheter fra Lung Cancer Europe, inkludert oppdateringer om AI-assistenten.",
  signOff: "Med vennlig hilsen,<br><br>Anna Keuchenius på vegne av chatbot-teamet<br>Lung Cancer Europe",
};

// ─── Finnish ─────────────────────────────────────────────────────────────────

const fi: EmailStrings = {
  subject: "Kiitos panoksestasi LuCE-chatbotille",
  greeting: "Hei {firstName} {lastName},",
  thankYou:
    "Kiitos, että käytit aikaa kysymystesi jakamiseen kanssamme — se merkitsee meille paljon ja muovaa suoraan sitä, mitä rakennamme.",
  mailingListUpdate:
    "Olet tilannut projektin päivitykset. Otamme yhteyttä kehityksen edetessä — tavoitteenamme on testijulkaisu marraskuussa keuhkosyöpätietoisuuskuukauden aikana.",
  followUs:
    "Seuraa meitä {linkedin}issä ja {instagram}issa saadaksesi uutisia Lung Cancer Europelta, mukaan lukien päivitykset tekoälyavustajasta.",
  signOff: "Ystävällisin terveisin,<br><br>Anna Keuchenius chatbot-tiimin puolesta<br>Lung Cancer Europe",
};

// ─── Portuguese ──────────────────────────────────────────────────────────────

const pt: EmailStrings = {
  subject: "Obrigada pela sua contribuição para o chatbot LuCE",
  greeting: "Olá {firstName} {lastName},",
  thankYou:
    "Obrigada por ter dedicado tempo a partilhar as suas perguntas connosco — significa muito e irá moldar diretamente o que construímos.",
  mailingListUpdate:
    "Optou por receber atualizações sobre o projeto. Entraremos em contacto à medida que as coisas avançam — estamos a apontar para um lançamento de teste em novembro, durante o Mês de Sensibilização para o Cancro do Pulmão.",
  followUs:
    "Siga-nos no {linkedin} e no {instagram} para notícias da Lung Cancer Europe, incluindo atualizações sobre o assistente de IA.",
  signOff: "Com os melhores cumprimentos,<br><br>Anna Keuchenius em nome da equipa do chatbot<br>Lung Cancer Europe",
};

// ─── Czech ───────────────────────────────────────────────────────────────────

const cs: EmailStrings = {
  subject: "Děkujeme za váš příspěvek k chatbotu LuCE",
  greeting: "Dobrý den, {firstName} {lastName},",
  thankYou:
    "Děkujeme, že jste si našli čas podělit se s námi o své otázky — velmi si toho vážíme a přímo to ovlivní to, co budujeme.",
  mailingListUpdate:
    "Přihlásili jste se k odběru aktualizací o projektu. Budeme vás informovat, jak se věci vyvíjejí — plánujeme zkušební spuštění v listopadu, během Měsíce povědomí o rakovině plic.",
  followUs:
    "Sledujte nás na {linkedin} a {instagram} pro novinky od Lung Cancer Europe, včetně aktualizací o AI asistentovi.",
  signOff: "S pozdravem,<br><br>Anna Keuchenius jménem týmu chatbotu<br>Lung Cancer Europe",
};

// ─── Slovak ──────────────────────────────────────────────────────────────────

const sk: EmailStrings = {
  subject: "Ďakujeme za váš príspevok k chatbotu LuCE",
  greeting: "Dobrý deň, {firstName} {lastName},",
  thankYou:
    "Ďakujeme, že ste si našli čas podeliť sa s nami o svoje otázky — veľmi si to vážime a priamo to ovplyvní to, čo budujeme.",
  mailingListUpdate:
    "Prihlásili ste sa na odber aktualizácií o projekte. Budeme vás informovať, ako sa veci vyvíjajú — plánujeme testovacie spustenie v novembri počas Mesiaca povedomia o rakovine pľúc.",
  followUs:
    "Sledujte nás na {linkedin} a {instagram} pre novinky od Lung Cancer Europe vrátane aktualizácií o AI asistentovi.",
  signOff: "S pozdravom,<br><br>Anna Keuchenius v mene tímu chatbotu<br>Lung Cancer Europe",
};

// ─── Hungarian ───────────────────────────────────────────────────────────────

const hu: EmailStrings = {
  subject: "Köszönjük hozzájárulását a LuCE chatbothoz",
  greeting: "Kedves {firstName} {lastName},",
  thankYou:
    "Köszönjük, hogy időt szánt kérdéseinek megosztására — ez sokat jelent számunkra, és közvetlenül alakítja majd azt, amit megalkotunk.",
  mailingListUpdate:
    "Feliratkozott a projekt frissítéseire. Kapcsolatban maradunk, ahogy a dolgok fejlődnek — novemberre tervezzük a tesztindítást, a Tüdőrák-tudatossági Hónap alatt.",
  followUs:
    "Kövessen minket a {linkedin}en és az {instagram}on a Lung Cancer Europe híreiért, beleértve az AI asszisztens frissítéseit is.",
  signOff: "Üdvözlettel,<br><br>Anna Keuchenius a chatbot csapat nevében<br>Lung Cancer Europe",
};

// ─── Romanian ────────────────────────────────────────────────────────────────

const ro: EmailStrings = {
  subject: "Mulțumim pentru contribuția dumneavoastră la chatbot-ul LuCE",
  greeting: "Bună ziua, {firstName} {lastName},",
  thankYou:
    "Vă mulțumim că ați luat timp să ne împărtășiți întrebările dumneavoastră — înseamnă mult pentru noi și va influența direct ceea ce construim.",
  mailingListUpdate:
    "V-ați înscris pentru a primi actualizări despre proiect. Vă vom contacta pe măsură ce lucrurile evoluează — ne propunem un lansament de testare în noiembrie, în timpul Lunii de conștientizare a cancerului pulmonar.",
  followUs:
    "Urmăriți-ne pe {linkedin} și {instagram} pentru știri de la Lung Cancer Europe, inclusiv actualizări despre asistentul AI.",
  signOff: "Cu stimă,<br><br>Anna Keuchenius în numele echipei chatbot<br>Lung Cancer Europe",
};

// ─── Croatian ────────────────────────────────────────────────────────────────

const hr: EmailStrings = {
  subject: "Hvala na vašem doprinosu LuCE chatbotu",
  greeting: "Poštovani/a {firstName} {lastName},",
  thankYou:
    "Hvala što ste odvojili vrijeme za dijeljenje svojih pitanja s nama — to nam puno znači i izravno će oblikovati ono što gradimo.",
  mailingListUpdate:
    "Prijavili ste se za primanje obavijesti o projektu. Bit ćemo u kontaktu kako se stvari budu razvijale — cilj nam je testno lansiranje u studenom, za vrijeme Mjeseca osvješćivanja o raku pluća.",
  followUs:
    "Pratite nas na {linkedin}u i {instagram}u za vijesti od Lung Cancer Europe, uključujući novosti o AI asistentu.",
  signOff: "Srdačan pozdrav,<br><br>Anna Keuchenius u ime tima za chatbot<br>Lung Cancer Europe",
};

// ─── Bulgarian ───────────────────────────────────────────────────────────────

const bg: EmailStrings = {
  subject: "Благодарим ви за приноса към чатбота LuCE",
  greeting: "Здравейте, {firstName} {lastName},",
  thankYou:
    "Благодарим ви, че отделихте време да споделите въпросите си с нас — това е много важно за нас и ще формира пряко това, което изграждаме.",
  mailingListUpdate:
    "Абонирахте се за получаване на актуализации за проекта. Ще се свържем с вас, когато нещата се развиват — планираме тестово стартиране през ноември, по време на Месеца на осведомеността за рак на белия дроб.",
  followUs:
    "Следвайте ни в {linkedin} и {instagram} за новини от Lung Cancer Europe, включително актуализации за AI асистента.",
  signOff: "С уважение,<br><br>Anna Keuchenius от името на екипа на чатбота<br>Lung Cancer Europe",
};

// ─── Greek ───────────────────────────────────────────────────────────────────

const el: EmailStrings = {
  subject: "Ευχαριστούμε για τη συμβολή σας στο chatbot LuCE",
  greeting: "Αγαπητέ/ή {firstName} {lastName},",
  thankYou:
    "Σας ευχαριστούμε που αφιερώσατε χρόνο για να μοιραστείτε τις ερωτήσεις σας μαζί μας — αυτό σημαίνει πολλά για εμάς και θα διαμορφώσει άμεσα αυτό που δημιουργούμε.",
  mailingListUpdate:
    "Επιλέξατε να λαμβάνετε ενημερώσεις για το έργο. Θα επικοινωνούμε μαζί σας καθώς εξελίσσονται τα πράγματα — στοχεύουμε σε μια δοκιμαστική κυκλοφορία τον Νοέμβριο, κατά τη διάρκεια του Μήνα Ευαισθητοποίησης για τον Καρκίνο του Πνεύμονα.",
  followUs:
    "Ακολουθήστε μας στο {linkedin} και στο {instagram} για νέα από το Lung Cancer Europe, συμπεριλαμβανομένων ενημερώσεων για τον βοηθό τεχνητής νοημοσύνης.",
  signOff: "Με εκτίμηση,<br><br>Anna Keuchenius εκ μέρους της ομάδας chatbot<br>Lung Cancer Europe",
};

// ─── Estonian ────────────────────────────────────────────────────────────────

const et: EmailStrings = {
  subject: "Täname teid panuse eest LuCE vestlusroboti arendamisse",
  greeting: "Tere, {firstName} {lastName},",
  thankYou:
    "Täname, et võtsite aega oma küsimuste jagamiseks meiega — see tähendab meile väga palju ja mõjutab otseselt seda, mida me loome.",
  mailingListUpdate:
    "Olete valinud projekti kohta uuenduste saamise. Võtame teiega ühendust, kui asjad arenevad — plaanime testimise käivitamist novembris, kopsuvähiteadlikkuse kuu ajal.",
  followUs:
    "Jälgige meid {linkedin}is ja {instagram}is Lung Cancer Europe uudiste saamiseks, sealhulgas tehisintellekti assistendi uuenduste kohta.",
  signOff: "Lugupidamisega,<br><br>Anna Keuchenius chatbot-meeskonna nimel<br>Lung Cancer Europe",
};

// ─── Latvian ─────────────────────────────────────────────────────────────────

const lv: EmailStrings = {
  subject: "Paldies par jūsu ieguldījumu LuCE tērzēšanas robotā",
  greeting: "Labdien, {firstName} {lastName},",
  thankYou:
    "Paldies, ka veltījāt laiku, lai dalītos ar mums savos jautājumos — tas mums ir ļoti svarīgi un tieši ietekmēs to, ko mēs veidojam.",
  mailingListUpdate:
    "Esat pierakstījies/-usies saņemt projekta atjauninājumus. Mēs sazināsimies, kad lietas attīstīsies — mēs plānojam testa palaišanu novembrī, Plaušu vēža izpratnes mēneša laikā.",
  followUs:
    "Sekojiet mums {linkedin} un {instagram}, lai saņemtu jaunumus no Lung Cancer Europe, tostarp atjauninājumus par AI asistentu.",
  signOff: "Ar cieņu,<br><br>Anna Keuchenius chatbot komandas vārdā<br>Lung Cancer Europe",
};

// ─── Lithuanian ──────────────────────────────────────────────────────────────

const lt: EmailStrings = {
  subject: "Dėkojame už jūsų indėlį į LuCE pokalbių robotą",
  greeting: "Sveiki, {firstName} {lastName},",
  thankYou:
    "Dėkojame, kad skyrėte laiko pasidalyti su mumis savo klausimais — tai mums labai daug reiškia ir tiesiogiai formuos tai, ką kuriame.",
  mailingListUpdate:
    "Jūs pasirinkote gauti projekto naujinimus. Susisieksime, kai situacija vystysis — planuojame bandomąjį paleidimą lapkritį, per Plaučių vėžio supratimo mėnesį.",
  followUs:
    "Sekite mus {linkedin} ir {instagram}, kad gautumėte naujienas iš Lung Cancer Europe, įskaitant atnaujinimus apie DI asistentą.",
  signOff: "Pagarbiai,<br><br>Anna Keuchenius chatbot komandos vardu<br>Lung Cancer Europe",
};

// ─── Slovenian ───────────────────────────────────────────────────────────────

const sl: EmailStrings = {
  subject: "Hvala za vaš prispevek k chatbotu LuCE",
  greeting: "Pozdravljeni, {firstName} {lastName},",
  thankYou:
    "Hvala, da ste si vzeli čas za deljenje svojih vprašanj z nami — to nam veliko pomeni in bo neposredno oblikovalo tisto, kar gradimo.",
  mailingListUpdate:
    "Prijavili ste se za prejemanje posodobitev o projektu. Stopili bomo v stik, ko se bodo stvari razvijale — cilj je preizkusni zagon novembra med Mesecem ozaveščanja o raku pljuč.",
  followUs:
    "Sledite nam na {linkedin}u in {instagram}u za novice Lung Cancer Europe, vključno s posodobitvami o AI asistentu.",
  signOff: "Lep pozdrav,<br><br>Anna Keuchenius v imenu ekipe chatbota<br>Lung Cancer Europe",
};

// ─── Maltese ─────────────────────────────────────────────────────────────────

const mt: EmailStrings = {
  subject: "Grazzi tal-kontribuzzjoni tiegħek għall-chatbot LuCE",
  greeting: "Għażiż/a {firstName} {lastName},",
  thankYou:
    "Grazzi li ħadt il-ħin biex taqsam il-mistoqsijiet tiegħek magħna — dan ifisser ħafna għalina u se jifforma direttament dak li nibnu.",
  mailingListUpdate:
    "Għażilt li tirċievi aġġornamenti dwar il-proġett. Ser inkunu f'kuntatt hekk kif l-affarijiet jiżviluppaw — qed nimmirati lejn pelanzjar ta' prova f'Novembru, matul ix-Xahar tal-Għarfien tal-Kanċer tal-Pulmun.",
  followUs:
    "Segwina fuq {linkedin} u {instagram} għall-aħbarijiet minn Lung Cancer Europe, inkluż aġġornamenti dwar l-assistent tal-AI.",
  signOff: "Tislijiet sħan,<br><br>Anna Keuchenius f'isem it-tim tal-chatbot<br>Lung Cancer Europe",
};

// ─── Translations map ─────────────────────────────────────────────────────────

const translations: Record<string, EmailStrings> = {
  en, de, fr, it, nl, pl, es, sv,
  da, no, fi, pt, cs, sk, hu,
  ro, hr, bg, el, et, lv, lt,
  sl, mt,
};

// ─── HTML template ────────────────────────────────────────────────────────────

function buildHtml(
  strings: EmailStrings,
  firstName: string,
  lastName: string,
  mailingListOptIn: boolean
): string {
  const greeting = strings.greeting
    .replace("{firstName}", firstName)
    .replace("{lastName}", lastName)
    .trim()
    // If both names are empty, fall back to a plain "Hi,"
    .replace(/^Hi\s*,/, firstName || lastName ? undefined! : "Hi,") || "Hi,";

  const followUs = strings.followUs
    .replace(
      "{linkedin}",
      `<a href="${LINKEDIN_URL}" style="color:#c8980a;text-decoration:underline;">LinkedIn</a>`
    )
    .replace(
      "{instagram}",
      `<a href="${INSTAGRAM_URL}" style="color:#c8980a;text-decoration:underline;">Instagram</a>`
    );

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${strings.subject}</title>
</head>
<body style="margin:0;padding:0;background:#f2f0ea;font-family:Arial,system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f2f0ea;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:4px;overflow:hidden;border:1px solid rgba(26,26,46,0.08);">

          <!-- Gold accent bar -->
          <tr>
            <td style="background:#c8980a;height:4px;font-size:0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding:32px 40px 24px;">
              <span style="font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#c8980a;">
                Lung Cancer Europe
              </span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:0 40px 40px;">

              <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#1a1a2e;">
                ${greeting}
              </p>

              <p style="margin:0 0 20px;font-size:16px;line-height:1.7;color:rgba(26,26,46,0.85);">
                ${strings.thankYou}
              </p>

              ${mailingListOptIn ? `
              <p style="margin:0 0 20px;font-size:16px;line-height:1.7;color:rgba(26,26,46,0.85);">
                ${strings.mailingListUpdate}
              </p>
              ` : ""}

              <p style="margin:0 0 32px;font-size:16px;line-height:1.7;color:rgba(26,26,46,0.85);">
                ${followUs}
              </p>

              <p style="margin:0;font-size:16px;line-height:1.8;color:rgba(26,26,46,0.85);">
                ${strings.signOff}
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid rgba(26,26,46,0.08);background:#f8f6f2;">
              <p style="margin:0;font-size:12px;color:rgba(26,26,46,0.4);line-height:1.5;">
                © 2026 Lung Cancer Europe —
                <a href="https://www.lungcancereurope.eu" style="color:rgba(26,26,46,0.4);">lungcancereurope.eu</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Plain-text fallback ──────────────────────────────────────────────────────

function buildText(
  strings: EmailStrings,
  firstName: string,
  lastName: string,
  mailingListOptIn: boolean
): string {
  const greeting = strings.greeting
    .replace("{firstName}", firstName)
    .replace("{lastName}", lastName)
    .trim();

  const followUs = strings.followUs
    .replace("{linkedin}", `LinkedIn (${LINKEDIN_URL})`)
    .replace("{instagram}", `Instagram (${INSTAGRAM_URL})`);

  return [
    greeting,
    "",
    strings.thankYou,
    "",
    ...(mailingListOptIn ? [strings.mailingListUpdate, ""] : []),
    followUs,
    "",
    strings.signOff.replace(/<br>/g, "\n"),
    "",
    "© 2026 Lung Cancer Europe — lungcancereurope.eu",
  ].join("\n");
}

// ─── Public API ───────────────────────────────────────────────────────────────

export function getConfirmationEmail(params: {
  language: string;
  firstName: string;
  lastName: string;
  mailingListOptIn: boolean;
}): { subject: string; html: string; text: string } {
  const { language, firstName, lastName, mailingListOptIn } = params;
  const strings = translations[language] ?? translations.en;

  return {
    subject: strings.subject,
    html: buildHtml(strings, firstName, lastName, mailingListOptIn),
    text: buildText(strings, firstName, lastName, mailingListOptIn),
  };
}
