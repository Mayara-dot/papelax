const detalhes = {
	C: "CADERNO ",
	BN: "BLOCO DE NOTAS ",
	CD: "CADERNETA ",
    B: "BIG ",
	A: "AZUL ", 
	V: "VERDE ",
	R: "ROSA ", 
	VER: "VERMELHO ",
    AM: "AMARELO ", 
    L: "LARANJA ", 
    CN: "CINZA ",
	2: "2.0 CM",
	3: "3.0 CM",
	4: "4.0 CM",
	5: "5.0 CM",
	"5PACOTES": 5,
	"12PACOTES": 12,
	"20PACOTES": 20,
	"25PACOTES": 25,
	"40PACOTES": 40,
	"50PACOTES": 50,
	"250PACOTES": 250,
	"50UNIDADES": 50,
	"100UNIDADES": 100,
	"200UNIDADES": 200,
	"500UNIDADES": 500,
	corAm: "#ffff00", //amarelo
	corL: "#ff9900", //laranja
	corV: "#e06666", //verde claro 1
	corA: "#4a86e8", //azul flor
	corCn: "#666666", //cinza escuo 3
    corR: "#E37ECE", //rosa orquidea
	corVer: "#a64d79", //magenta
	corC: "#b4a7d6", //roxo claro 2
	corBN: "#9fc5e8", //azul claro 2
	corCD: "#F15B61", //rosa salmão
    corB: "#90E800" //verde limão
};

var codigos = {
	// <!-- CADERNO --!>
	"CCN": { "descricao": detalhes.C + detalhes.CN + " - " + detalhes["20PACOTES"] + " PCTS C/ " + detalhes["50UNIDADES"] + " UNIDS",
	"nPacotes": detalhes["20PACOTES"],
	"color1": detalhes.corC,
	"color2": detalhes.corCn
	},
	"CR-200": { "descricao": detalhes.C + detalhes.R +" - "  + detalhes["5PACOTES"] + " PCTS C/ " + detalhes["200UNIDADES"] + " UNIDS",
	"nPacotes": detalhes["5PACOTES"],
	"color1": detalhes.corC,
	"color2": detalhes.corR
	},
	"CL-200": { "descricao": detalhes.C + detalhes.L + " - " + detalhes["20PACOTES"] + " PCTS C/ " + detalhes["50UNIDADES"] + " UNIDS",
	"nPacotes": detalhes["20PACOTES"],
	"color1": detalhes.corC,
	"color2": detalhes.corL
	},
	"C-200": { "descricao": detalhes.C + " - " + detalhes["5PACOTES"] + " PCTS C/ " + detalhes["200UNIDADES"] + " UNIDS",
	"nPacotes": detalhes["5PACOTES"],
	"color1": detalhes.corC,
	},

	//<!-- BLOCO DE NOTAS -->
	"BNVER-100": {
	"descricao": detalhes.BN + detalhes.VER + " - " + detalhes["25PACOTES"] + " PCTS C/ " + detalhes["100UNIDADES"] + " UNIDS ",
	"nPacotes": detalhes["25PACOTES"],
	"color1": detalhes.corBN,
	"color2": detalhes.corVer
	},
	"BNAM-500": {
	"descricao": detalhes.BN + detalhes.AM + " - " + detalhes["40PACOTES"] + " PCTS C/ " + detalhes["500UNIDADES"] + " UNIDS ",
	"nPacotes": detalhes["40PACOTES"],
	"color1": detalhes.corBN,
	"color2": detalhes.corAm
	},
	
	//<!-- CADERNETA -->
	"CDA2-50": { "descricao": detalhes.CD + detalhes.A + detalhes[2] + " - " + detalhes["50PACOTES"] + " PCTS C/ " + detalhes["50UNIDADES"] + " UNIDS",	
	"nPacotes": detalhes["50PACOTES"],
	"color1": detalhes.corCD,
	"color2": detalhes.corA	
	},
	"CDL2-100": { "descricao": detalhes.CD + detalhes.L + detalhes[2] + " - " + detalhes["25PACOTES"] + " PCTS C/ " + detalhes["100UNIDADES"] + " UNIDS",
	"nPacotes": detalhes["25PACOTES"],
	"color1": detalhes.corCD,
	"color2": detalhes.corL	
	},
	"CDR3-50": { "descricao": detalhes.CD + detalhes.R + detalhes[3] + " - " + detalhes["50PACOTES"] + " PCTS C/ " + detalhes["50UNIDADES"] + " UNIDS",
	"nPacotes": detalhes["50PACOTES"],
	"color1": detalhes.corCD,
	"color2": detalhes.corR
	},
	"CD3-50": { "descricao": detalhes.CD + detalhes[3] + " - " + detalhes["50PACOTES"] + " PCTS C/ " + detalhes["50UNIDADES"] + " UNIDS",
	"nPacotes": detalhes["50PACOTES"],
	"color1": detalhes.corCD,
	},
	
	//<!-- CADERNETA BIG 4 -->
	"CDB4-500": { "descricao": detalhes.CD + detalhes.B + detalhes[4] + " - " + detalhes["5PACOTES"] + " PCTS C/ " + detalhes["500UNIDADES"] + " UNIDS",
	"nPacotes": detalhes["5PACOTES"],
	"color1": detalhes.corCD,
	"color2": detalhes.corB
	},
	"CDBA4-500": { "descricao": detalhes.CD + detalhes.B + detalhes.A + detalhes[4] + " - " + detalhes["5PACOTES"] + " PCTS C/ " + detalhes["500UNIDADES"] + " UNIDS",
	"nPacotes": detalhes["5PACOTES"],
	"color1": detalhes.corB,
	"color2": detalhes.corA
	},
	"CDBR4-500": { "descricao": detalhes.CD + detalhes.B + detalhes.R + detalhes[4] + " - " + detalhes["5PACOTES"] + " PCTS C/ " + detalhes["500UNIDADES"] + " UNIDS",
	"nPacotes": detalhes["5PACOTES"],
	"color1": detalhes.corB,
	"color2": detalhes.corR
	},
	"CDBL4-100": { "descricao": detalhes.CD + detalhes.B + detalhes.L + detalhes[4] + " - " + detalhes["25PACOTES"] + " PCTS C/ " + detalhes["100UNIDADES"] + " UNIDS",
	"nPacotes": detalhes["25PACOTES"],
	"color1": detalhes.corB,
	"color2": detalhes.corL
	},
	"CDBAM4-100": { "descricao": detalhes.CD + detalhes.B + detalhes.AM + detalhes[4] + " - " + detalhes["25PACOTES"] + " PCTS C/ " + detalhes["100UNIDADES"] + " UNIDS",
	"nPacotes": detalhes["25PACOTES"],
	"color1": detalhes.corB,
	"color2": detalhes.corAm
	},

	//<!--  CADERNETA BIG 5 -->
	"CDB5-100": { "descricao": detalhes.CD + detalhes.B + detalhes[5] + " - " + detalhes["5PACOTES"] + " PCTS C/ " + detalhes["500UNIDADES"] + " UNIDS",
	"nPacotes": detalhes["5PACOTES"],
	"color1": detalhes.corCD,
	"color2": detalhes.corB
	},
    "CDBV5-500": { "descricao": detalhes.CD + detalhes.B + detalhes.V + detalhes[5] + " - " + detalhes["5PACOTES"] + " PCTS C/ " + detalhes["500UNIDADES"] + " UNIDS",
	"nPacotes": detalhes["5PACOTES"],
	"color1": detalhes.corB,
	"color2": detalhes.corV
	},
	"CDBCN5-500": { "descricao": detalhes.CD + detalhes.B + detalhes.CN + detalhes[5] + " - " + detalhes["5PACOTES"] + " PCTS C/ " + detalhes["500UNIDADES"] + " UNIDS",
	"nPacotes": detalhes["5PACOTES"],
	"color1": detalhes.corB,
	"color2": detalhes.corCn
	},
	"CDBVER5-100": { "descricao": detalhes.CD + detalhes.B + detalhes.VER + detalhes[5] + " - " + detalhes["5PACOTES"] + " PCTS C/ " + detalhes["500UNIDADES"] + " UNIDS",
	"nPacotes": detalhes["5PACOTES"],
	"color1": detalhes.corB,
	"color2": detalhes.corVer
	},
};