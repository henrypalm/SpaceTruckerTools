const scavengingPrices = {
  "Coolers": [
    { name: "IcePlunge", size: 1, class: "Competition", grade: "C", ship: "F7C-R MKI - Blade - Fury LX - Razor (B - LX) - 85x - M50", price: 1500 },
    { name: "Quikcool", size: 1, class: "Competition", grade: "D", ship: "Mustang (G - O) - 350r - Aurora (LX)", price: 800 },
    { name: "Polar", size: 1, class: "Military", grade: "B", ship: "Gladius (P) - F7C-M Heartseeker - F8C/A - Terrapin - Khartu-al - San'tok.yāi - Defender - Buccaneer - Scorpius (ALL)", price: 2500 },
    { name: "Bracer", size: 1, class: "Military", grade: "C", ship: "Avenger (ALL) - Gladius (Base and V) - Sabre (ALL) - Arrow - C8 (ALL) - F7A/C MKII - F7C-M Super - F7C-R MKII - F7C-S MKII - Gladiator - Hawk - Hurricane - Glaive - P72 - Scythe - Reliant (T) - 125a", price: 2000 },
    { name: "VaporBlock", size: 1, class: "Stealth", grade: "B", ship: "Eclipse", price: 2200 },
    { name: "HeatSafe", size: 1, class: "Stealth", grade: "C", ship: "F7C-S MKI - Herald - Razor (EX) - Reliant (M) - 315p", price: 1800 },
    { name: "AbsoluteZero", size: 2, class: "Competition", grade: "B", ship: "Starlancer Max", price: 3000 },
    { name: "PermaFrost", size: 2, class: "Military", grade: "B", ship: "Vanguard (H)", price: 4000 },
    { name: "Artic", size: 2, class: "Military", grade: "C", ship: "Retaliator - Vanguard (Ho - W) - Valkyrie - Ares (ALL) - Cutlass Steel - Freelancer MIS", price: 3500 },
    { name: "Boreal", size: 2, class: "Military", grade: "D", ship: "A1 - C1 - Cutter (S)", price: 3000 },
    { name: "HeatSink", size: 2, class: "Stealth", grade: "C", ship: "Vanguard (S) - Prowler", price: 3200 },
    { name: "Blizzard", size: 3, class: "Military", grade: "A", ship: "Redeemer - Hull-C", price: 6000 },
    { name: "Mercury", size: 3, class: "Military", grade: "B", ship: "HammerHead - A2 - M2 - Starfarer (G)", price: 5800 }
  ],
  "Shields": [
    { name: "Targa", size: 1, class: "Competition", grade: "C", ship: "F7C-R MKI - P72 - Razor (B - LX) - 350r - 85x - M50 - Aurora (LX)", price: 1500 },
    { name: "Falco", size: 1, class: "Competition", grade: "D", ship: "Mustang (G - O) - Fury LX", price: 800 },
    { name: "ForceWall", size: 1, class: "Military", grade: "B", ship: "F7C-M Heartseeker - Khartu-al", price: 2000 },
    { name: "AllStop", size: 1, class: "Military", grade: "C", ship: "Gladius (Base and V) - Arrow - F7A/C MKII - F7C-M Super - F7C-R MKII - F7C-S MKII - Hawk - Blade - Glaive - Scythe - Reliant (T) - 125a - 325a - Mantis", price: 1800 },
    { name: "Suldrath", size: 1, class: "Military", grade: "C", ship: "Talon (ALL)", price: 1700 },
    { name: "SecureHyde", size: 1, class: "Military", grade: "D", ship: "Gladius (P) - Mustang (D) - P52 - Aurora (LN)", price: 1200 },
    { name: "Veil", size: 1, class: "Stealth", grade: "B", ship: "Eclipse", price: 2000 },
    { name: "Shimmer", size: 1, class: "Stealth", grade: "C", ship: "Avenger (S) (W) - Sabre (ALL) - C8 (ALL) - F7C-S MKI - Herald - Razor (EX) - Reliant (M) - 315p", price: 1900 },
    { name: "Cloak", size: 1, class: "Stealth", grade: "D", ship: "Fury (B - MX)", price: 1400 },
    { name: "FullStop", size: 2, class: "Military", grade: "C", ship: "Redeemer - Retaliator - Vanguard (Ho - W) - Gladiator - Hurricane - Valkyrie - San'tok.yāi - A1 - Ares (ALL) - C1 - Cutlass Steel - Freelancer MIS - Scorpius (ALL)", price: 4000 },
    { name: "Sukoran", size: 2, class: "Military", grade: "C", ship: "Prowler", price: 3500 },
    { name: "SecureShield", size: 2, class: "Military", grade: "D", ship: "Vanguard (Ha)", price: 3000 },
    { name: "Sheut", size: 2, class: "Stealth", grade: "B", ship: "Vanguard (S) - F8C/A", price: 3600 },
    { name: "FullBlcock", size: 3, class: "Military", grade: "B", ship: "A2 - M2", price: 6000 }
  ],
  "Quantum Drives": [
    { name: "FoxFire", size: 1, class: "Competition", grade: "B", ship: "Intrepid - Syulen - Cutter (ALL)", price: 1500 },
    { name: "LightFire", size: 1, class: "Competition", grade: "C", ship: "Razor (B - LX) - M50", price: 1200 },
    { name: "Beacon", size: 1, class: "Military", grade: "C", ship: "Gladius (Base and V) - Arrow - Gladiator - San'tok.yāi - Defender - Glaive - Scythe - Reliant (T) - 325a - 85x - Mantis", price: 1800 },
    { name: "Drift", size: 1, class: "Stealth", grade: "C", ship: "Eclipse - Sabre (ALL) - Talon (ALL) - Razor (EX) - Reliant (M)", price: 1900 },
    { name: "SparkFire", size: 2, class: "Competition", grade: "C", ship: "Starlancer Max", price: 3000 },
    { name: "Yeager", size: 2, class: "Military", grade: "B", ship: "Vanguard (H) - A1 - C1", price: 3500 },
    { name: "CrossField", size: 2, class: "Military", grade: "C", ship: "Redeemer - Retaliator - Vanguard (Ho - W) - Ares (ALL) - Cutlass Steel - Freelancer MIS", price: 3800 },
    { name: "Nova", size: 2, class: "Stealth", grade: "C", ship: "Vanguard (S) - Prowler", price: 3600 },
    { name: "Pontes", size: 3, class: "Military", grade: "C", ship: "A2 - M2 - Caterpillar - Starfarer (G)", price: 5800 }
  ]
};