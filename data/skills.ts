import { Skill } from "../types/types";

export const skills: Skill[] = [
    {
        key: "accounting",
        label: "Accounting",
        base: 0.05,
        description: "Grants understanding of accountancy procedures and reveals the financial functioning of a business or person. Inspecting the books, one might detect cheated employees, siphoned off funds, payment of bribes or blackmail, and whether the financial condition is better or worse than claimed. Looking through old accounts, one could see how money was gained or lost in the past (grain, slave-trading, whiskey-running, etc.) and to whom and for what payment was made.",
        pushexamples: "taking more time to review documents; visiting banks or businesses to validate findings; double checking the math and data. ",
        pushconsequences: "discussions between investigators and third parties alert some enemy faction to the investigators' intentions; a vital part of the accounts is destroyed or lost (perhaps in their tired state the investigator spills coffee over them). If an insane investigator fails a pushed roll, he or she might be found having partially eaten the accounts.",
        source: "base",
        restriction: null,
        notes: ""
    },
    {
        key: "animalhandling",
        label: "Animal Handling",
        base: 0.05,
        description: "The ability to command and train domesticated animals to perform simple tasks. The skill is most commonly applied to dogs but may include birds, cats, monkeys, and so on (at the Keeper's discretion). For riding animals, such as horses or camels, the Ride skill is used for breaking-in and controlling such mounts.",
        pushexamples: "taking greater personal risk, in terms of getting closer to, or directly handling the animal.",
        pushconsequences: "the animal attacks the trainer or someone else nearby, most likely causing damage; the animal escapes. If an insane investigator fails a pushed roll, he or she might be found behaving like the animal they were trying to control.",
        source: "base",
        restriction: null,
        notes: ""
    },
    {
        key: "anthropology",
        label: "Anthropology",
        base: 0.01,
        description: "Enables the user to identify and understand an individual's way of life through observation. If the skill-user observes another culture from within for a time, or works from accurate records concerning an extinct culture, then simple predictions can be made about that culture's ways and morals, even though the evidence may be incomplete. Studying the culture for a month or more, the anthropologist begins to understand how the culture functions and, in combination with Psychology, may predict the actions and beliefs of those being studied. ",
        pushexamples: " taking more time to study the target/s; going \"native\" for a period; taking an active role in a ceremony, rite, etc",
        pushconsequences: "being attacked or imprisoned by the people studied, due to some perceived transgression of their laws or social mores; suffering severe side-effects as the result of being involved in a ceremony which involved ingesting psychotropic plants. If an insane investigator fails a pushed roll, he or she will be lost among the culture being studied, for example like Dennis Hopper's photojournalist character in the film Apocalypse Now.",
        source: "base",
        restriction: null,
        notes: ""
    },
    {
        key: "appraise",
        label: "Appraise",
        base: 0.05,
        description: "Used to estimate the value of a particular item, including the quality, material used, and workmanship. Where relevant, the skill-user could pinpoint the age of the item, assess its historical relevance, and detect forgeries.",
        pushexamples: "checking an item’s validity with another expert; conducting testing; researching an item",
        pushconsequences: " accidentally ruining the item in question; bringing the item to the attention of other people, leading to its theft; activating whatever function the item might serve. If an insane investigator fails a pushed roll, he or she could destroy the item, believing it to be cursed; alternatively they regard the item as their personal salvation and refuse to give it up to anyone else.",
        source: "base",
        restriction: null,
        notes: ""
    },
    {
        key: "archaeology",
        label: "Archaeology",
        base: 0.01,
        description: "Allows dating and identi cation of artifacts from past cultures, and the detection of fakes. Ensures expertise in setting up and excavating a dig site. On inspecting a site, the user might deduce the purposes and way of life of those who left the remains. Anthropology might aid in this. Archaeology also helps identify written forms of extinct human languages.",
        pushexamples: "taking more time to study the site or item; conducting further research; consulting another expert",
        pushconsequences: "the site is spoiled, with finds ruined through incompetence, vandalism, or theft; some higher authority seizes the site or the finds from your control; publicity leads to the finds being stolen. If an insane investigator fails a pushed roll, he or she keeps digging deeper, ever deeper—the truth is down there somewhere.",
        source: "base",
        restriction: null,
        notes: ""
    },
    {
        key: "artcraft_acting",
        label: "Art/Craft (Acting)",
        base: 0.05,
        description: "The performer is trained in theatrical and/or film acting (in the modern era, this may also include television), able to adopt a persona, memorize scripts, and utilize stage/movie make-up to alter their appearance (See Disguise skill).",
        pushexamples: "reworking the object, piece or composition from scratch; conducting further research; checking with another expert.",
        pushconsequences: "a vast amount of time and money is wasted in creating a failed attempt; the audience or customer is highly offended or physically injured by some aspect of your work; the critics slam your work and no one desires your services any longer. If an insane investigator fails a pushed roll, he or she creates a transgressive work that shocks and causes violent reactions in the viewer—perhaps only the most decadent could appreciate it.",
        source: "base",
        restriction: null,
        notes: "The investigator sheet contains blank spaces for specializations of this skill, for example: Acting, Barber, Carpenter, Cobbler, Cook, Dancer, Fine Art, Forgery, Morris Dancer, Opera Singer, Painter & Decorator, Photographer, Potter, Sculptor, Writer, Woodwork. Many of these examples are skills directly linked to a profession, but the skill may just be a leisure pursuit. You may spend skill points to purchase any skill specialization. The generic Art/Craft  skill cannot be purchased. Ability with this skill may enable the making or repair of an item—something typically requiring equipment and time, to be determined by the Keeper if necessary. In a situation where graduations of success might be appropriate, a higher level of success indicates the item made is of high quality and/or precision. An art or craft skill might also be used to make a duplicate or fake item. In such a case, the difficulty level would depend on the intricacy and distinctiveness of the original to be copied. In the case of faking documentation, a specific specialization (Forgery) is used. A successful roll might provide information about an item, such as where or when it might have been made, some point of history or technique concerning it, or who might have made it. The holder of a specialization would have a breadth of knowledge within a particular field— knowledge of the subject, its history, and contemporary practitioners, as well as the ability to perform it."
    },
    {
        key: "artcraft_fineart",
        label: "Art/Craft (Fine Art)",
        base: 0.05,
        description: "The artist is accomplished in the art of painting (oils, acrylic, watercolor), as well as sketching in pencil, crayon, or pastels. While serious works of art might take many days or months to complete, the artist may quickly sketch accurate impressions, objects, and people. The skill also denotes a familiarity with the art world, and the artist may be able to determine a particular artist's work, their school, and known history.",
        pushexamples: "reworking the object, piece or composition from scratch; conducting further research; checking with another expert.",
        pushconsequences: "a vast amount of time and money is wasted in creating a failed attempt; the audience or customer is highly offended or physically injured by some aspect of your work; the critics slam your work and no one desires your services any longer. If an insane investigator fails a pushed roll, he or she creates a transgressive work that shocks and causes violent reactions in the viewer—perhaps only the most decadent could appreciate it.",
        source: "base",
        restriction: null,
        notes: "The investigator sheet contains blank spaces for specializations of this skill, for example: Acting, Barber, Carpenter, Cobbler, Cook, Dancer, Fine Art, Forgery, Morris Dancer, Opera Singer, Painter & Decorator, Photographer, Potter, Sculptor, Writer, Woodwork. Many of these examples are skills directly linked to a profession, but the skill may just be a leisure pursuit. You may spend skill points to purchase any skill specialization. The generic Art/Craft  skill cannot be purchased. Ability with this skill may enable the making or repair of an item—something typically requiring equipment and time, to be determined by the Keeper if necessary. In a situation where graduations of success might be appropriate, a higher level of success indicates the item made is of high quality and/or precision. An art or craft skill might also be used to make a duplicate or fake item. In such a case, the difficulty level would depend on the intricacy and distinctiveness of the original to be copied. In the case of faking documentation, a specific specialization (Forgery) is used. A successful roll might provide information about an item, such as where or when it might have been made, some point of history or technique concerning it, or who might have made it. The holder of a specialization would have a breadth of knowledge within a particular field— knowledge of the subject, its history, and contemporary practitioners, as well as the ability to perform it."
    },
    {
        key: "artcraft_forgery",
        label: "Art/Craft (Forgery)",
        base: 0.05,
        description: "Adept at fine detail, the user can produce high quality fake documents, be it a person's handwriting, a bureaucratic form or permit, or a duplicate of a tome. The forger will require suitable materials (inks, grades of paper, etc.) as well as an original from which to copy. A successful roll indicates the forgery will pass a normal, cursory inspection. Someone spending time and thoroughly examining the forgery would use the Appraise skill (opposed by the original forger's skill) when determining if the fake can be spotted",
        pushexamples: "reworking the object, piece or composition from scratch; conducting further research; checking with another expert.",
        pushconsequences: "a vast amount of time and money is wasted in creating a failed attempt; the audience or customer is highly offended or physically injured by some aspect of your work; the critics slam your work and no one desires your services any longer. If an insane investigator fails a pushed roll, he or she creates a transgressive work that shocks and causes violent reactions in the viewer—perhaps only the most decadent could appreciate it.",
        source: "base",
        restriction: null,
        notes: "The investigator sheet contains blank spaces for specializations of this skill, for example: Acting, Barber, Carpenter, Cobbler, Cook, Dancer, Fine Art, Forgery, Morris Dancer, Opera Singer, Painter & Decorator, Photographer, Potter, Sculptor, Writer, Woodwork. Many of these examples are skills directly linked to a profession, but the skill may just be a leisure pursuit. You may spend skill points to purchase any skill specialization. The generic Art/Craft  skill cannot be purchased. Ability with this skill may enable the making or repair of an item—something typically requiring equipment and time, to be determined by the Keeper if necessary. In a situation where graduations of success might be appropriate, a higher level of success indicates the item made is of high quality and/or precision. An art or craft skill might also be used to make a duplicate or fake item. In such a case, the difficulty level would depend on the intricacy and distinctiveness of the original to be copied. In the case of faking documentation, a specific specialization (Forgery) is used. A successful roll might provide information about an item, such as where or when it might have been made, some point of history or technique concerning it, or who might have made it. The holder of a specialization would have a breadth of knowledge within a particular field— knowledge of the subject, its history, and contemporary practitioners, as well as the ability to perform it."
    },
    {
        key: "artcraft_photography",
        label: "Art/Craft (Photography)",
        base: 0.05,
        description: "Covers both still and motion photography. This skill allows one to take clear pictures, develop them properly, and enhance half-hidden detail. In the 1920s, the user is able to prepare the necessary chemicals to make flashpowder (see Dangerous Photography, page 173). In the present day, the skill extends to cover video cameras, video playback equipment, digital photography, and digital editing, where the user is adept at the manipulation of digital images. Radically different versions can be created from an original source, such as changing the location of a person in a photograph, who they are with, and what they are doing. Those proficient may also be able to detect when an image has been manipulated. Regular snapshots do not require a skill roll. Rolls would be required to achieve effective candid photographs, or shots that capture fine detail—especially at long range, at speed,or in low light. This skill can also allow the investigator to determine if a photograph has been tampered with or fabricated, as well as the angle and position from which a photograph was taken.",
        pushexamples: "reworking the object, piece or composition from scratch; conducting further research; checking with another expert. ",
        pushconsequences: "a vast amount of time and money is wasted in creating a failed attempt; the audience or customer is highly offended or physically injured by some aspect of your work; the critics slam your work and no one desires your services any longer. If an insane investigator fails a pushed roll, he or she creates a transgressive work that shocks and causes violent reactions in the viewer—perhaps only the most decadent could appreciate it.",
        source: "base",
        restriction: null,
        notes: "The investigator sheet contains blank spaces for specializations of this skill, for example: Acting, Barber, Carpenter, Cobbler, Cook, Dancer, Fine Art, Forgery, Morris Dancer, Opera Singer, Painter & Decorator, Photographer, Potter, Sculptor, Writer, Woodwork. Many of these examples are skills directly linked to a profession, but the skill may just be a leisure pursuit. You may spend skill points to purchase any skill specialization. The generic Art/Craft  skill cannot be purchased. Ability with this skill may enable the making or repair of an item—something typically requiring equipment and time, to be determined by the Keeper if necessary. In a situation where graduations of success might be appropriate, a higher level of success indicates the item made is of high quality and/or precision. An art or craft skill might also be used to make a duplicate or fake item. In such a case, the difficulty level would depend on the intricacy and distinctiveness of the original to be copied. In the case of faking documentation, a specific specialization (Forgery) is used. A successful roll might provide information about an item, such as where or when it might have been made, some point of history or technique concerning it, or who might have made it. The holder of a specialization would have a breadth of knowledge within a particular field— knowledge of the subject, its history, and contemporary practitioners, as well as the ability to perform it."
    },
    {
        key: "artillery",
        label: "Artillery",
        base: 0.01,
        description: "skill assumes some form of military training and experience. The user is experienced in the operation of field weapons in warfare, able to work in a crew or detachment to operate the projection of munitions beyond the range of personal weapons. Many weapons of this nature are too large for a single person to operate, and either an individual cannot use the weapon without a crew or the difficulty level should be raised (at the Keeper's discretion, dependent on the type of weapon employed). Various specializations exist, depending on the period setting of the game, including cannon, howitzer, mortar, and rocket launcher.",
        pushexamples: "",
        pushconsequences: "",
        source: "base",
        restriction: null,
        notes: "Uncommon skill. As a combat skill, this cannot be pushed."
    },
    {
        key: "charm",
        label: "Charm",
        base: 0.15,
        description: "Charm takes many forms, including physical attraction, seduction,  flattery, or simply warmth of personality. Charm may be used to compel someone to act in a certain way, but not in a manner completely contrary to that person's normal behavior. Charm is opposed by the Charm or Psychology skills. Charm may be used for bargaining, to haggle the price of an item or service down. If successful, the seller is won over and they may well reduce the price a little.",
        pushexamples: "overtly flattering the target with affection; presenting an expensive gift; building trust by imparting a secret. Remember this is about being charming: if the investigator begins to take an alternative approach, the Keeper may ask for a different skill to be used; if threats are used, it may become Intimidation; or if a protracted discussion ensues, it may become Persuasion. Switching from one to the other to gain a second roll still constitutes a pushed roll.",
        pushconsequences: "the target takes offence and will have nothing further to do with you; the target is associated in some way with your enemies and, while they may play along with you, they also inform on you; a third party intercedes to prevent you from chatting up their girl. If an insane investigator fails a pushed roll, he or she falls head over heels in love with their target and will act as if the target had successfully used a Dominate spell (see Call of Cthulhu Rulebook) upon them",
        source: "base",
        restriction: null,
        notes: ""
    },
    {
        key: "climb",
        label: "Climb",
        base: 0.2,
        description: "This skill allows a character to climb trees, walls and other vertical surfaces with or without ropes and climbing gear. The skill also encompasses rappelling. Conditions, such as firmness of surface, available handholds, wind, visibility, rain, etc., may all affect the difficulty level. Failing this skill on the first roll indicates that the climb is perhaps beyond the investigator's capability. Failing a pushed roll is likely to indicate a fall with resultant damage. One successful Climb roll should allow the investigator to complete the climb in almost all cases (rather than requiring repeated rolls). A challenging or longer climb should have an increased difficulty level.",
        pushexamples: "reassessing the climb; taking a longer route; straining one's reach.",
        pushconsequences: "fall and suffer damage (1D6 damage per ten feet onto grass, or 1D10 damage per 10 feet onto concrete); lose a valuable possession as it falls from your pocket (you may not notice this until later); become stranded, unable to go up or down. If an insane investigator fails a pushed roll, he or she holds on for dear life and screams at the top of their lungs for as long as they can.",
        source: "base",
        restriction: null,
        notes: ""
    },
    {
        key: "computeruse",
        label: "Computer Use",
        base: 0.05,
        description: "This skill allows the investigator to program in various computer languages, retrieve and analyze obscure data, break into a secured system, explore a complicated network, and detect or exploit intrusions, back doors, and viruses. Special manipulation of a computer system may require this roll. The Internet places a wealth of information at the fingertips of an investigator. Use of the Internet to find highly specific or obscure information may require a combined dice roll for Computer Use and Library Use. This skill is not needed to use computers when surfing the Internet, collecting email, or to run regular commercially available software. ",
        pushexamples: "taking longer to develop a program; using another's code as a shortcut; using untested software (e.g. a virus) to exploit a system.",
        pushconsequences: "accidentally erasing the sought-after files, or even corrupting the whole system; leaving evidence or alerting others through your actions; infesting your own computer/network with a virus. If an insane investigator fails a pushed roll, he or she is lost in cyberspace, and it will require physical intervention to get the person to stop using the computer or look away from the screen.",
        source: "base",
        restriction: "Modern",
        notes: ""
    },
    {
        key: "creditrating",
        label: "Credit Rating",
        base: 0,
        description: "A measure of how prosperous and financially confident the investigator appears to be. Money opens doors; if the investigator is attempting to use his or her financial status to achieve a goal then use of the Credit Rating skill may be appropriate. Credit Rating can be used in place of APP to gauge first impressions. (i.e. wealthier people tend to dress in more expensive clothing). Call of Cthulhu is not a game that requires money to be carefully tracked; however, it is useful to know the bounds of an investigator's financial reach—for example, can the investigator afford to employ a team of archaeologists and workers to excavate an Egyptian tomb? An investigator's Credit Rating can change over time. Investigators of the Cthulhu Mythos are prone to insanity, and this may lead to loss of employment and thus a lowering of the investigator's Credit Rating score",
        pushexamples: "you o er your house and/or other valuables to secure money from a loan shark; you attempt to pressure the bank manager into giving you a loan. ",
        pushconsequences: "the loan shark turns nasty and directs his boys to teach you lesson; the bank manager calls the police; you are loaned the money, but it is a ploy to put you in deeper debt with a mobster who plans to buy out your debt and later call on you for a favor. If an insane investigator fails a pushed roll, he or she loses all faith in capitalism and begins freely handing out his or her money to passersby. ",
        source: "base",
        restriction: null,
        notes: "Credit Rating is not so much a skill as a gauge of financial wealth, and should not be ticked as other skills are. A high Credit Rating can be a useful resource in play, and so should be paid for with skill points when creating an investigator. Each occupation has a starting range for Credit Rating, and skill points should be spent to achieve a rating therein. "
    },
    {
        key: "cthulhumythos",
        label: "Cthulhu Mythos",
        base: 0,
        description: "Cthulhu Mythos (00%) is skill reflects understanding of the inhuman (Lovecraftian) Cthulhu Mythos. It is not founded on the accumulation of knowledge as academic skills are. Rather, it represents the opening and tuning of the human mind to the Cthulhu Mythos. Thus, Cthulhu Mythos skill derived from encountering Deep Ones (for example) is transferable to other situations and entities. Also referred to as \"That which man should not know,\" the Cthulhu Mythos is antithetical to human understanding, and exposure to it undermines human sanity. No starting investigator may take points in Cthulhu Mythos as a starting skill (unless agreed with the Keeper). There is no tick-box for Cthulhu Mythos on the investigator sheet, as successful use of the skill does not offer an increase in the investigator's percentiles in the skill. Instead, points in Cthulhu Mythos are gained by encounters with the Mythos that result in insanity, by insane insights into the true nature of the universe, and by reading forbidden books and other Mythos writings. A character's Sanity may never be higher than 99 minus his or her Cthulhu Mythos skill. As Cthulhu Mythos points proliferate, they crowd out Sanity points, and leave the investigator vulnerable. Whenever spoor or other evidence of Mythos monsters is found, a successful roll against this skill allows the investigator to identify the entity, deduce something about its behavior, or guess at some property it may possess. A successful Cthulhu Mythos roll might also allow an investigator to remember some fact concerning the Mythos, identify a spell by seeing it cast, remember that a particular spell or piece of information may be found in a particular Mythos tome, or achieve some other task. The Cthulhu Mythos skill may also be used to manifest magical spell-like effects.",
        pushexamples: "getting closer to the creature for a better view; consulting dread tomes, or lore of humans (or otherwise) possessing specialist knowledge; conducting an autopsy to learn more; reading aloud as you retrace the strange cryptograms.",
        pushconsequences: " get too close, exposing oneself to harm or suspicion; unwittingly read aloud a passage from a tome that activates a summoning spell; accidentally corrupt or destroy the evidence being studied. If an insane investigator fails a pushed roll, he or she experiences a vision or revelation that reveals new truths about the Cthulhu Mythos",
        source: "base",
        restriction: null,
        notes: ""
    },
    {
        key: "demolitions",
        label: "Demolitions",
        base: 0.01,
        description: "With this skill the user is familiar in the safe use of demolitions, including setting and defusing explosive charges. Mines and similar devices are designed to be easy to set (no roll required) and more difficult to remove or defuse. This skill also encompasses military-grade demolitions (anti-personnel mines, plastique, etc.) Given enough time and resources, those proficient may rig charges to demolish a building, clear a blocked tunnel, and repurpose explosive devises (such as constructing low-yield charges, booby-traps, and so on).",
        pushexamples: "taking until the very last second to defuse the bomb; double-checking all the circuits/connections by hand.",
        pushconsequences: " if defusing or removing an explosive device, the consequence of failing a pushed roll is clear—it explodes! If using the Demolitions skill to place charges, the consequence of failing a pushed roll may be a failure to detonate at the right time (or at all), or that the detonation fails to have the desired effect (either too great or too little). If an insane investigator fails a pushed roll, he or she devises the most bizarre method of delivering the explosive, such as strapping it to a cat or to themselves.",
        source: "base",
        restriction: null,
        notes: "Uncommon skill"
    },
    {
        key: "disguise",
        label: "Disguise",
        base: 0,
        description: "To be used whenever you wish to appear to be someone other than whom you are. The user changes posture, costume, and/or voice to enact a disguise, posing as another person or another sort of person. Theatrical makeup may help, as will fake ID. Note that to pass as a specific person in a face-to-face meeting with someone who knows the person being imitated is beyond the scope of this skill, and may well indicate the need for a combined skill roll at a higher difficulty (with Persuade, Charm, or Fast Talk)",
        pushexamples: "undergoing a fully immersive and intensive preparation (losing oneself in the role); stealing personal items and utilizing them in the disguise; overt exaggeration to confound the target; feigning a sudden attack of illness to disorientate the observer.",
        pushconsequences: "Being arrested; causing offence, leading to violence or criminal charges; finding that the person being imitated is wanted by a criminal gang who come looking for vengeance. If an insane investigator fails a pushed roll, the investigator no longer recognizes his or her own face in the mirror, even when the disguise is removed.",
        source: "base",
        restriction: null,
        notes: ""
    },
    {
        key: "",
        label: "",
        base: 0.05,
        description: "",
        pushexamples: "",
        pushconsequences: "",
        source: "base",
        restriction: null,
        notes: ""
    },
]