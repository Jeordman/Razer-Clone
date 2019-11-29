let inventory = [
  {
    name: "Razer Blade Stealth",
    components: {
      base: {
        os: "Windows 10 Home (64-bit)",
        processor: "Quad-Core 8th Gen Intel® Core™ i7-8565U Processor",
        graphics: "Intel® UHD Graphics 620",
        display: '13.3" FHD Matte w/ 4.9mm slim side bezel',
        storage: "256GB",
        memory: "8GB dual-channel (fixed)",
        battery: "Up to 13 hours (53.1Wh)",
        keyboard: "Single-zone RGB powered by Razer Chroma™",
        finish: "Anodized black finish, tone on tone Razer logo",
        dimensions: '0.58" x 11.99" x 8.27" / 14.8mm x 304.6mm x 210mm',
        price: 1099.99
      },
      graphicsCard: [
        {
          name: "Intel UHD Graphics 620",
          price: 0
        },
        {
          name: "Intel Iris Plus Graphics",
          price: 400
        },
        {
          name: "GeForce MX150",
          price: 200
        },
        {
          name: "GeForce GTX 1650",
          price: 700
        }
      ],
      displayProcessor: [
        {
          name: "Full HD 8th Gen Intel Core i7",
          price: 0
        },
        {
          name: "Full HD 10th Gen Intel Core i7",
          price: 0
        },
        {
          name: "4K Touch 8th Gen Intel Core i7",
          price: 400
        },
        {
          name: "4K Touch 10th Gen Intel Core i7",
          price: 200
        }
      ],
      storage: [
        "256GB SSD Black",
        "256GB SSD Mercury White",
        "256GB SSD Quartz Pink",
        "512GB SSD Black"
      ],
      razerCare: [
        {
          plan: "No plan",
          price: 0
        },
        {
          plan: "RazerCare Essential",
          price: 199.99
        },
        {
          plan: "RazerCare Elite",
          price: 299.99
        }
      ]
    }
  },
  {
    name: "Razer Blade 15",
    components: {
      base: {
        model: [
          "Razer Blade 15 - Base Model",
          "Razer Blade 15 - Advanced Model"
        ],
        os: "Windows 10 Home (64-bit)",
        processor: "8th Gen Intel® Core™ i7-8750H 6 Core (2.2GHz/4.1GHz)",
        graphics: "NVIDIA® GeForce® GTX 1060 Max-Q (6GB VRAM)",
        display:
          '15.6" Full HD 60Hz, 100% sRGB, 4.9mm bezel, factory calibrated',
        storage: "256GB SSD (NVMe) + 2TB HDD (5400rpm)",
        memory: "16GB Dual-Channel (8GB x 2) DDR4 2667MHz",
        battery: "Up to 6 hours (65Wh)",
        keyboard: "Single-zone RGB powered by Razer Chroma™",
        gigabitEthernet: "Yes",
        usb: "USB 3.1 Gen 1 (USB-A) x3, Thunderbolt™ 3 (USB-C)",
        wireless: "Intel® Wireless-AC 9260 (802.11a/b/g/n/ac), Bluetooth® 5",
        webcam: "Built-in HD webcam (1MP / 720P)",
        finish: "Black with backlit green logo and green USB ports",
        dimensions: '0.78" x 9.25" x 13.98" / 19.9mm x 235mm x 355mm',
        weight: "4.48 lbs / 2.03 kg",
        price: 1599.99
      },
      graphicsCard: [
        {
          name: "GeForce GTX 1060 Max-Q",
          price: 0
        },
        {
          name: "GeForce GTX 1660 Ti",
          price: 0
        },
        {
          name: "GeForce RTX 2060",
          price: 400
        },
        {
          name: "GeForce RTX 2070 Max-Q",
          price: 800
        }
      ],
      displayProcessor: [
        {
          name: "Full HD 60Hz 8th Gen Intel Core i7",
          price: 0
        },
        {
          name: "Full HD 60Hz 9th Gen Intel Core i7",
          price: 0
        },
        {
          name: "Full HD 144Hz 9th Gen Intel Core i7",
          price: 200
        },
        {
          name: "Full HD 240Hz 9th Gen Intel Core i7",
          price: 300
        }
      ],
      storage: [
        "256GB SSD Black",
        "512GB SSD Black",
        "512GB SSD Mercury White"
      ],
      razerCare: [
        {
          plan: "No plan",
          price: 0
        },
        {
          plan: "RazerCare Essential",
          price: 199.99
        },
        {
          plan: "RazerCare Elite",
          price: 299.99
        }
      ]
    }
  },
  {
    name: "Razer Blade Pro 17",
    components: {
      base: {
        os: "Windows 10 Home (64-bit)",
        processor: "9th Gen Intel® Core™ i7-9750H 6 Core (2.6GHz/4.5GHz)",
        graphics: "NVIDIA® GeForce RTX™ 2060 (6GB GDDR6 VRAM)",
        display:
          '17.3" Full HD 144Hz, 100% sRGB, 6.0mm bezel, factory calibrated',
        storage: "512GB PCIe NVMe SSD",
        memory: "16GB Dual-Channel (8GB x 2) DDR4 2667MHz",
        battery: "70.5Whr",
        keyboard: "Per-key RGB powered by Razer Chroma™",
        gigabitEthernet: "2.5Gb Ethernet",
        usb:
          "USB 3.2 Gen 2 (USB-A) x3, USB3.2 Gen 2 (USB-C), Thunderbolt™ 3 (USB-C)",
        wireless: "Intel® Wireless-AX200 (802.11/a/b/g/n/ac/ax), Bluetooth® 5",
        webcam: "Built-in HD webcam (1MP / 720P)",
        finish: "Black with backlit green logo and green USB ports",
        dimensions: '0.78" x 10.24" x 15.55" / 19.9mm x 260mm x 395mm',
        weight: "6.06 lbs / 2.75 kg",
        price: 2499.99
      },
      graphicsCard: [
        {
          name: "GeForce RTX 2060",
          price: 0
        },
        {
          name: "GeForce RTX 2070 Max-Q",
          price: 0
        }
      ],
      display: [
        {
          name: "Full HD 144Hz 9th",
          price: 0
        },
        {
          name: "Full HD 240Hz",
          price: 300
        },
        {
          name: "4k Touch 12Hz",
          price: 800
        }
      ],
      storage: ["512GB SSD", "1TB SSD"],
      razerCare: [
        {
          plan: "No plan",
          price: 0
        },
        {
          plan: "RazerCare Essential",
          price: 199.99
        },
        {
          plan: "RazerCare Elite",
          price: 299.99
        }
      ]
    }
  }
];
