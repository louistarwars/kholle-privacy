# Politique de confidentialité — Khôlle

*Dernière mise à jour : 28 octobre 2026*

**Khôlle** est une application Android de cartes de révision (flashcards) à répétition espacée. Cette page couvre l'application et son site de présentation. En résumé : **l'application ne fait rien quitter de votre téléphone**, et le site ne recueille une adresse e-mail que si vous vous préinscrivez.

## Données que l'application ne collecte pas

Khôlle **ne collecte, ne transmet et ne partage aucune donnée personnelle**.

- Pas de compte, pas d'inscription, pas d'adresse e-mail demandée.
- Pas de publicité, pas de traceurs, pas d'outil d'analyse, pas de statistiques d'usage envoyées.
- L'application ne demande pas l'autorisation d'accéder à Internet : elle fonctionne entièrement hors ligne.
- Pas d'accès à la localisation, aux contacts, à la caméra, au micro, aux photos ni aux fichiers du téléphone (hors fichiers que vous choisissez vous-même, voir plus bas).

## Données enregistrées sur votre téléphone

Pour fonctionner, l'application enregistre **uniquement sur votre appareil** : vos paquets et cartes, votre historique de révision (dates, réponses), vos réglages (design, objectif quotidien, horaires de notifications) et votre progression (série, niveau, défis). Ces données restent dans l'espace privé de l'application. Elles sont supprimées si vous désinstallez l'application ou si vous effacez ses données dans les réglages d'Android.

## Notifications

Les questions et rappels sont des **notifications locales** créées par l'application sur votre téléphone. Aucun serveur n'est impliqué. Vous pouvez les désactiver à tout moment dans l'application ou dans les réglages d'Android. L'autorisation « notifications » est demandée à l'ouverture et peut être refusée.

## Sauvegarde, import, export et partage

- **Export / sauvegarde** : si vous exportez vos cartes ou une sauvegarde, le fichier est écrit à l'endroit que vous choisissez avec le sélecteur de fichiers d'Android. C'est vous qui décidez où il va (stockage du téléphone, cloud personnel…).
- **Import** : l'application ne lit que le fichier que vous sélectionnez.
- **Partage de vos statistiques** : la fonction de partage ouvre le menu de partage d'Android avec un court texte ; l'application ne l'envoie nulle part elle-même.
- **Sauvegarde Android** : selon vos réglages, Android peut sauvegarder les données de l'application dans votre compte Google (Sauvegarde Google). Cette sauvegarde est gérée par Android et Google, pas par Khôlle, et peut être désactivée dans les réglages du téléphone.

## Lecture à voix haute

La lecture à voix haute des cartes (anglais et langues vivantes) utilise le moteur de synthèse vocale installé sur votre téléphone. Selon ce moteur (par exemple Google), certaines voix peuvent nécessiter une connexion ; cela dépend de votre appareil et non de Khôlle, qui n'envoie aucune donnée.

## Polices et composants

Les polices (licence SIL Open Font) et la bibliothèque d'affichage des formules (KaTeX, licence MIT) sont **embarquées dans l'application** ; rien n'est téléchargé.

## Site web et préinscription

Avant la sortie de l'application, le site de présentation de Khôlle proposait une **préinscription** (fermée depuis la sortie sur Google Play). Elle était facultative : l'application fonctionne sans.

- **Ce que nous recueillons :** votre adresse e-mail et la date de l'inscription. Rien d'autre.
- **Pourquoi :** vous ajouter à la liste des testeurs de la version de test de Khôlle sur Google Play, vous donner accès à sa page, et vous prévenir de la sortie publique.
- **Base légale :** votre consentement, donné en cochant une case avant l'envoi. Vous pouvez le retirer à tout moment.
- **Où c'est stocké :** le formulaire utilise le service Web3Forms (web3forms.com), qui reçoit votre adresse et la transmet par e-mail à l'éditeur ; il peut en garder brièvement un historique d'envoi et la traite selon sa propre politique. L'éditeur la conserve dans sa boîte de réception, puis la saisit dans la Google Play Console pour vous donner accès à la version de test : Google la traite alors selon sa propre politique.
- **Partage :** pas de vente, pas de publicité, pas de transmission à d'autres tiers.
- **Durée de conservation :** jusqu'à la sortie publique de l'application, puis suppression sous 30 jours, ou plus tôt sur votre demande.
- **Vos droits :** accès, rectification, suppression, retrait du consentement : écrivez à **louisprogrammation@proton.me**. Vous pouvez aussi saisir la CNIL (cnil.fr).
- **Âge :** la préinscription s'adresse aux personnes de 15 ans et plus.

Le site est hébergé par Vercel, qui peut enregistrer l'adresse IP des visiteurs. Il charge des polices depuis Google Fonts et des bibliothèques depuis cdnjs et jsDelivr : votre navigateur contacte donc ces services. Le site n'utilise aucun cookie ni outil d'analyse de tiers (voir « Statistiques de visites » ci-dessous). Il garde sur votre appareil, dans le stockage du navigateur, une simple indication « préinscrit » pour ne pas redemander votre e-mail.

## Questionnaire des premiers testeurs

Les personnes qui testent Khôlle en avant-première peuvent répondre à un court questionnaire (une page du site qui leur est réservée) : intérêt pour un serveur Discord, pour la modération, pour le partage de paquets, pour faire connaître l'appli. Il recueille leurs choix, leur adresse e-mail, un prénom ou pseudo et un message facultatifs, avec leur accord (case à cocher). Ces réponses servent uniquement à organiser le Discord et à les recontacter. Elles transitent par Web3Forms, sont conservées par l'éditeur jusqu'à la sortie publique de l'application, puis supprimées sous 30 jours, ou plus tôt sur demande à **louisprogrammation@proton.me**.

## Bibliothèque de paquets

Le site propose une **bibliothèque de paquets de flashcards** : on peut en télécharger, et en proposer.

- **Télécharger** ne demande aucune information. Le site compte seulement le nombre de téléchargements de chaque paquet : il ajoute 1 au compteur et garde, **24 heures au plus**, une empreinte anonyme et irréversible (calculée à partir de l'adresse IP, du paquet et de la date) pour ne pas compter deux fois la même personne. Le compteur est stocké dans une base fournie par Upstash, via Vercel.
- **Proposer un paquet** : le formulaire recueille le contenu du paquet, son titre, sa matière et sa filière, le nom affiché (ou « Anonyme ») et **votre adresse e-mail**, avec trois cases de consentement (droits d'auteur, publication, confidentialité).
- **Pourquoi :** relire le paquet, le publier s'il est conforme, vous contacter à son sujet et traiter une éventuelle demande de retrait.
- **Ce qui est publié :** le paquet, son titre, sa matière, sa filière et le nom affiché, sous licence Creative Commons BY-NC 4.0. **Votre e-mail n'est jamais publié.**
- **Où c'est stocké :** le formulaire utilise le service Web3Forms (web3forms.com), qui transmet l'envoi par e-mail à l'éditeur. Les paquets publiés sont hébergés avec le site.
- **Durée :** l'e-mail et les paquets non publiés sont supprimés dans les 30 jours après la décision de publier ou non. Un paquet publié reste en ligne jusqu'à votre demande de retrait.
- **Droits d'auteur :** ne proposez que des contenus que vous avez écrits ou que vous avez le droit de diffuser. Pour signaler un contenu ou demander un retrait, écrivez à **louisprogrammation@proton.me** : il sera retiré rapidement.

## Statistiques de visites

Pour savoir si le site est utile, il compte ses visites **de façon anonyme, sans cookie et sans service d'analyse tiers**. À chaque visite, il enregistre seulement des totaux : la page consultée, le site ou la campagne d'où vient le visiteur (par exemple un lien partagé), le pays (déduit par le réseau de l'hébergeur) et le type d'appareil (mobile ou ordinateur). Pour compter une personne une seule fois par jour, il garde pendant **48 heures au plus** une empreinte irréversible calculée à partir de l'adresse IP, du navigateur et de la date : l'adresse IP elle-même n'est pas conservée. Les totaux journaliers sont gardés environ 13 mois. Les visites des robots et des navigateurs qui demandent de ne pas être suivis (« Do Not Track ») ne sont pas comptées. Les données sont stockées dans la base Upstash, via Vercel.

## Enfants

L'application ne collecte aucune donnée, y compris auprès des mineurs. Elle est conçue pour des lycéens et étudiants. La préinscription du site est réservée aux personnes de 15 ans et plus.

## Vos droits

Comme aucune donnée personnelle ne nous est transmise, nous n'en détenons aucune. Vous gardez le contrôle total de vos données : vous pouvez les exporter, les modifier ou les supprimer à tout moment depuis l'application ou en la désinstallant.

## Modifications

Si cette politique change (par exemple si une fonction en ligne était ajoutée un jour), la nouvelle version sera publiée à cette adresse avec une nouvelle date, et l'application ne transmettra rien sans que vous en soyez clairement informé.

## Contact

Une question sur cette politique : **louisprogrammation@proton.me**

---

# Privacy Policy — Khôlle (English)

*Last updated: October 28, 2026*

**Khôlle** is an Android spaced-repetition flashcard app. This page covers the app and its website. In short: **nothing in the app ever leaves your phone.**

- **No data collected, transmitted or shared.** No account, no ads, no trackers, no analytics. The app does not request the Internet permission and works fully offline.
- **Stored locally only:** your decks, cards, review history, settings and progress. They stay in the app's private storage and are deleted when you uninstall the app or clear its data.
- **Notifications** are local notifications generated on your device. You can turn them off at any time.
- **Export / import / share:** files are written to or read from the location you choose with Android's file picker; the share button opens Android's share sheet. Khôlle itself sends nothing.
- **Android backup:** depending on your settings, Android may back up app data to your Google account (Google Backup). This is handled by Android/Google, not by Khôlle, and can be disabled in your phone settings.
- **Text-to-speech** uses the speech engine installed on your phone; some voices may need a connection depending on that engine. Khôlle sends no data.
- **Fonts and the KaTeX formula renderer are bundled** in the app; nothing is downloaded.
- **Website pre-registration (optional):** the Khôlle website lets you pre-register with your e-mail address. We collect only that address and the date, with your consent (checkbox), to add you to the Google Play test group, give you access to the test page and tell you about the public release. It is received through the Web3Forms form service (web3forms.com), which forwards it by e-mail to the publisher, who keeps it in an inbox and enters it into the Google Play Console, never sold or shared otherwise, and deleted within 30 days after the public release or on request (louisprogrammation@proton.me). For ages 15 and over. The website is hosted on Vercel and loads fonts from Google Fonts and libraries from cdnjs/jsDelivr; it uses no cookies or third-party analytics.
- **Early-tester questionnaire (optional):** testers can answer a short form about a Discord server, moderation, sharing packs and spreading the word. It collects their choices, e-mail address, an optional name and message, with their consent. Used only to organize the Discord and contact them; received through Web3Forms; deleted within 30 days after the public release, or earlier on request.
- **Pack library (optional):** the website lets you download flashcard packs, and submit your own. Downloads are counted per pack (a counter, plus an anonymous irreversible fingerprint derived from the IP address, kept for 24 hours at most, to avoid counting the same person twice; stored in an Upstash database via Vercel). A submission collects the pack, its title, subject, track, a display name and your e-mail address (never published), with consent checkboxes (copyright, publication, privacy). It is received through Web3Forms, reviewed, and published under CC BY-NC 4.0 if compliant. E-mails and unpublished packs are deleted within 30 days of the decision. Only submit content you wrote or have the right to share; to report content or request removal, write to louisprogrammation@proton.me.
- **Visit statistics:** the website counts visits anonymously, with no cookies and no third-party analytics: only daily totals (page, referring site or campaign, country, device type) plus an irreversible fingerprint (IP address + browser + date) kept for 48 hours at most to count unique visitors; the IP address itself is not stored. Daily totals are kept about 13 months. Bots and browsers sending Do Not Track are not counted. Stored in the Upstash database via Vercel.
- **Children:** Khôlle collects no data from anyone, including minors. It is designed for high-school and university students.
- **Your rights:** since we hold no personal data, there is nothing to access or delete on our side; you control all your data on your device.
- **Changes:** any future change will be published at this address with a new date.

Contact: **louisprogrammation@proton.me**
