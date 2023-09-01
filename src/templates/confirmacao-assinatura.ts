import { images } from "./images";
import { contracts, users } from "@prisma/client"

export const email_confirmacao_assinatura = (contract: contracts, seller: users, signing: string) => `
<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<title>Confirma&ccedil;&atilde;o de Assinatura - Cooperativa SION</title>
<!--[if !mso]><!-->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!--<![endif]-->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style type="text/css">
#outlook a{padding:0;}body{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}table,td{border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;}img{border:0;height:auto;line-height:100%;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;}p{display:block;margin:0;}
</style>
<!--[if mso]> <noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<![endif]-->
<!--[if lte mso 11]>
<style type="text/css">
.ogf{width:100% !important;}
</style>
<![endif]-->
<!--[if !mso]><!-->
<link href="https://fonts.googleapis.com/css?family=Inter:400,700" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Poppins:700,300" rel="stylesheet" type="text/css">
<style type="text/css">

</style>
<!--<![endif]-->
<style type="text/css">
@media only screen and (min-width:599px){.xc568{width:568px!important;max-width:568px;}.xc536{width:536px!important;max-width:536px;}.pc100{width:100%!important;max-width:100%;}}
</style>
<style media="screen and (min-width:599px)">.moz-text-html .xc568{width:568px!important;max-width:568px;}.moz-text-html .xc536{width:536px!important;max-width:536px;}.moz-text-html .pc100{width:100%!important;max-width:100%;}
</style>
<style type="text/css">
noinput.mn-checkbox{display:block!important;max-height:none!important;visibility:visible!important;}
@media only screen and (max-width:598px){.mn-checkbox[type="checkbox"]~.il{display:none!important;}.mn-checkbox[type="checkbox"]:checked~.il,.mn-checkbox[type="checkbox"]~.mn-trigger{display:block!important;max-width:none!important;max-height:none!important;font-size:inherit!important;}.mn-checkbox[type="checkbox"]~.il>a{display:block!important;}.mn-checkbox[type="checkbox"]:checked~.mn-trigger .mn-icon-close{display:block!important;}.mn-checkbox[type="checkbox"]:checked~.mn-trigger .mn-icon-open{display:none!important;}}
@media only screen and (max-width:598px){table.fwm{width:100%!important;}td.fwm{width:auto!important;}}
</style>
<style type="text/css">
u+.emailify .gs{background:#000;mix-blend-mode:screen;display:inline-block;padding:0;margin:0;}u+.emailify .gd{background:#000;mix-blend-mode:difference;display:inline-block;padding:0;margin:0;}p{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;}u+.emailify a{color:inherit!important;text-decoration:none!important;}#MessageViewBody a{color:inherit!important;text-decoration:none!important;}td.b .klaviyo-image-block{display:inline;vertical-align:middle;}
@media only screen and (max-width:599px){.emailify{height:100%!important;margin:0!important;padding:0!important;width:100%!important;}u+.emailify .glist{margin-left:1em!important;}td.ico.v>div.il>a.l.m,td.ico.v .mn-label{padding-right:0!important;padding-bottom:16px!important;}td.x{padding-left:0!important;padding-right:0!important;}.fwm img{max-width:100%!important;height:auto!important;}.aw img{width:auto!important;margin-left:auto!important;margin-right:auto!important;}.awl img{width:auto!important;margin-right:auto!important;}.awr img{width:auto!important;margin-left:auto!important;}.ah img{height:auto!important;}td.b.nw>table,td.b.nw a{width:auto!important;}td.stk{border:0!important;}td.u{height:auto!important;}br.sb{display:none!important;}.thd-1 .i-thumbnail{display:inline-block!important;height:auto!important;overflow:hidden!important;}.hd-1{display:block!important;height:auto!important;overflow:visible!important;}.hm-1{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;mso-hide:all!important;}.ht-1{display:table!important;height:auto!important;overflow:visible!important;}.hr-1{display:table-row!important;height:auto!important;overflow:visible!important;}.hc-1{display:table-cell!important;height:auto!important;overflow:visible!important;}div.r.pr-16>table>tbody>tr>td,div.r.pr-16>div>table>tbody>tr>td{padding-right:16px!important}div.r.pl-16>table>tbody>tr>td,div.r.pl-16>div>table>tbody>tr>td{padding-left:16px!important}td.v.s-8>div.il>a.l.m{padding-right:8px!important;}td.v.ico.s-8>div.il>a.l.m,td.v.ico.s-8 .mn-label{padding-bottom:8px!important;padding-right:0!important;}div.w.pr-16>table>tbody>tr>td,div.w.pr-16>div>table>tbody>tr>td{padding-right:16px!important;}div.w.pl-16>table>tbody>tr>td,div.w.pl-16>div>table>tbody>tr>td{padding-left:16px!important;}}
@media (prefers-color-scheme:light) and (max-width:599px){.ds-1.hd-1{display:none!important;height:0!important;overflow:hidden!important;}}
@media (prefers-color-scheme:dark) and (max-width:599px){.ds-1.hd-1{display:block!important;height:auto!important;overflow:visible!important;}}
@media (prefers-color-scheme:dark){.dh-1{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;mso-hide:all!important;}.ds-1{display:block!important;max-width:none!important;max-height:none!important;height:auto!important;overflow:visible!important;mso-hide:all!important;}}
</style>
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<!--[if gte mso 9]>
<style>a:link,span.MsoHyperlink{mso-style-priority:99;color:inherit;text-decoration:none;}a:visited,span.MsoHyperlinkFollowed{mso-style-priority:99;color:inherit;text-decoration:none;}li{text-indent:-1em;}table,td,p,div,span,ul,ol,li,a{mso-hyphenate:none;}sup,sub{font-size:100% !important;}
</style>
<![endif]-->
</head>
<body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#f5f5f5;"><div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">Sua assinatura foi confirmada!</div><div class="bg" style="background-color:#f5f5f5;" lang="en">
<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" role="presentation" style="width:600px;" width="600"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r  pr-16 pl-16" style="background:#eeeeee;background-color:#eeeeee;margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#eeeeee;background-color:#eeeeee;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:568px;">
<![endif]--><div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" class="v  s-8" style="font-size:0;word-break:break-word;"><div class="il" style>
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center"><tr><td style="padding:0;padding-top:0;padding-left:0;padding-right:8px;padding-bottom:0;" class="l-outlook -outlook m-outlook">
<![endif]--> <a class="l  m" href="#insertUrlLink" target="_blank" style="display:inline-block;color:#000000;font-family:Inter,Arial,sans-serif;font-size:13px;font-weight:normal;line-height:0;text-decoration:none;text-transform:none;padding:0;padding-top:0;padding-left:0;padding-right:8px;padding-bottom:0;"> <span style="font-size:12px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#777777;line-height:125%;text-decoration:underline;mso-line-height-alt:16px;mso-ansi-font-size:12px;">Ver
no navegador</span></a>
<!--[if mso | IE]>
</td><td style="padding:0;padding-top:0;padding-left:0;padding-right:0;padding-bottom:0;" class="l-outlook -outlook -outlook">
<![endif]--> <a class="l  " href="#insertUrlLink" target="_blank" style="display:inline-block;color:#000000;font-family:Inter,Arial,sans-serif;font-size:13px;font-weight:normal;line-height:0;text-decoration:none;text-transform:none;padding:0;padding-top:0;padding-left:0;padding-right:0;padding-bottom:0;"> <span style="font-size:12px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#777777;line-height:125%;text-decoration:underline;mso-line-height-alt:16px;mso-ansi-font-size:12px;">Cancelar
Inscri&ccedil;&atilde;o</span></a>
<!--[if mso | IE]>
</td></tr></table>
<![endif]--></div>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" role="presentation" style="width:600px;" width="600"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r  pr-16 pl-16" style="background:#384974;background-color:#384974;margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#384974;background-color:#384974;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:40px 16px 40px 16px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:568px;">
<![endif]--><div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" class="i" style="font-size:0;padding:0;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;"><tbody><tr><td style="width:260px;"> <a href="https://cooperativasion.com.br/" target="_blank" title> <img alt src="${images.header_logo}" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="260" height="auto"></a>
</td></tr></tbody></table>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" role="presentation" style="width:600px;" width="600"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:32px 32px 0px 32px;text-align:center;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:536px;">
<![endif]--><div class="xc536 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" class="x" style="font-size:0;word-break:break-word;"><div style="text-align:center;"><p style="Margin:0;text-align:center;mso-line-height-alt:32px;mso-ansi-font-size:28px;"><span style="font-size:28px;font-family:Inter,Arial,sans-serif;font-weight:700;color:#000000;line-height:114%;mso-line-height-alt:32px;mso-ansi-font-size:28px;">Sua assinatura foi confirmada!</span></p></div>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="w-outlook -outlook pr-16-outlook pl-16-outlook -outlook" role="presentation" style="width:600px;" width="600" bgcolor="#fffffe"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="w  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:center;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" width="600px">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" role="presentation" style="width:568px;" width="568"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r  pr-16 pl-16" style="background:#eeeeee;background-color:#eeeeee;margin:0px auto;max-width:568px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#eeeeee;background-color:#eeeeee;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:536px;">
<![endif]--><div class="pc100 ogf" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
<!--[if mso | IE]>
<table border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td style="vertical-align:middle;width:536px;">
<![endif]--><div class="pc100 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100.0000%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" class="x" style="font-size:0;word-break:break-word;"><div style="text-align:center;"><p style="Margin:0;text-align:center;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:15px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#333333;line-height:153%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">${contract.company}</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:15px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#333333;line-height:153%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">${contract.name}</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:15px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#333333;line-height:153%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">${contract.phone}</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:15px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#333333;line-height:153%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">${contract.email}<br class="sb">${seller.name}</span></p></div>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]--></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="w-outlook -outlook pr-16-outlook pl-16-outlook -outlook" role="presentation" style="width:600px;" width="600" bgcolor="#fffffe"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="w  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:center;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" width="600px">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" role="presentation" style="width:568px;" width="568"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r  pr-16 pl-16" style="background:#eeeeee;background-color:#eeeeee;margin:0px auto;max-width:568px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#eeeeee;background-color:#eeeeee;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:536px;">
<![endif]--><div class="pc100 ogf" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
<!--[if mso | IE]>
<table border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td style="vertical-align:middle;width:536px;">
<![endif]--><div class="pc100 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100.0000%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" class="x" style="font-size:0;word-break:break-word;"><div style="text-align:center;"><p style="Margin:0;text-align:center;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:15px;font-family:Poppins,Arial,sans-serif;font-weight:700;color:#333333;line-height:153%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Assindo como:</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:15px;font-family:Poppins,Arial,sans-serif;font-weight:700;color:#333333;line-height:153%;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:15px;font-family:Poppins,Arial,sans-serif;font-weight:300;color:#333333;line-height:153%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">[e-mail]</span></span></p></div>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]--></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" role="presentation" style="width:600px;" width="600"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r  pr-16 pl-16" style="background:#eeeeee;background-color:#eeeeee;margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#eeeeee;background-color:#eeeeee;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:30px 16px 30px 16px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:568px;">
<![endif]--><div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" class="i  dh-1 m" style="font-size:0;padding:0;padding-bottom:16px;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;"><tbody><tr><td style="width:74px;"> <a href="https://cooperativasion.com.br/" target="_blank" title> <img alt src="${images.footer_logo}" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="74" height="auto"></a>
</td></tr></tbody></table>
</td></tr><tr><td align="center" class="i  ds-1 m" style="mso-hide:all;display:none;height:0;overflow:hidden;font-size:0;padding:0;padding-bottom:16px;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-hide:all;border-collapse:collapse;border-spacing:0;"><tbody style="mso-hide:all;"><tr style="mso-hide:all;"><td style="mso-hide:all;width:74px;" width="74"> <a href="https://cooperativasion.com.br/" target="_blank" title style="mso-hide:all;"> <img alt src="${images.footer_logo}" style="mso-hide:all;border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="74" height="auto"></a>
</td></tr></tbody></table>
</td></tr><tr><td align="center" class="x  m" style="font-size:0;padding-bottom:16px;word-break:break-word;"><div style="text-align:center;"><p style="Margin:0;text-align:center;mso-line-height-alt:16px;mso-ansi-font-size:14px;"><span style="font-size:13px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#4d4d4d;line-height:123%;mso-line-height-alt:16px;mso-ansi-font-size:14px;">Cooperativa SION</span></p></div>
</td></tr><tr><td align="center" class="x  m" style="font-size:0;padding-bottom:16px;word-break:break-word;"><div style="text-align:center;"><p style="Margin:0;text-align:center;mso-line-height-alt:16px;mso-ansi-font-size:14px;"><span style="font-size:13px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#aaaaaa;line-height:123%;text-decoration:underline;mso-line-height-alt:16px;mso-ansi-font-size:14px;"><a href="https://www.google.com/maps/place/Sion+Energia/@-25.4083714,-49.2561871,17z/data=!3m1!4b1!4m5!3m4!1s0x94dce58c4581bba5:0xac193fe861a14dc3!8m2!3d-25.4083671!4d-49.2539982?hl=pt-BR" style="color:#aaaaaa;text-decoration:underline;" target="_blank">Rua Dr. Manoel Pedro, 365, 21&ordm; andar. Curitiba - PR</a></span></p></div>
</td></tr><tr><td align="center" class="o" style="font-size:0;padding:0;padding-bottom:0;word-break:break-word;">
<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td>
<![endif]-->
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tbody><tr class="e  dh-1 m"><td style="padding:0 16px 0 0;vertical-align:middle;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:20px;"><tbody><tr><td style="font-size:0;height:20px;vertical-align:middle;width:20px;"> <a href="https://www.instagram.com/sion_energia/" target="_blank"> <img alt="Instagram" title height="20" src="${images.instagram}" style="display:block;" width="20"></a>
</td></tr></tbody></table>
</td></tr></tbody></table>
<!--[if mso | IE]>
</td><td>
<![endif]-->
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tbody><tr class="e  dh-1 m"><td style="padding:0 16px 0 0;vertical-align:middle;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:20px;"><tbody><tr><td style="font-size:0;height:20px;vertical-align:middle;width:20px;"> <a href="https://www.facebook.com/SionEnergia" target="_blank"> <img alt="Facebook" title height="20" src="${images.facebook}" style="display:block;" width="20"></a>
</td></tr></tbody></table>
</td></tr></tbody></table>
<!--[if mso | IE]>
</td><td>
<![endif]-->
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tbody><tr class="e  dh-1 m"><td style="padding:0 16px 0 0;vertical-align:middle;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:20px;"><tbody><tr><td style="font-size:0;height:20px;vertical-align:middle;width:20px;"> <a href="https://www.linkedin.com/company/sion-energia/" target="_blank"> <img alt="Linkedin" title height="20" src="${images.linkedin}" style="display:block;" width="20"></a>
</td></tr></tbody></table>
</td></tr></tbody></table>
<!--[if mso | IE]>
</td><td>
<![endif]-->
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tbody><tr class="e  ds-1 m" style="mso-hide:all;display:none;height:0;overflow:hidden;"><td style="mso-hide:all;padding:0 16px 0 0;vertical-align:middle;" valign="middle">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-hide:all;width:20px;" width="20"><tbody style="mso-hide:all;"><tr style="mso-hide:all;"><td style="mso-hide:all;font-size:0;height:20px;vertical-align:middle;width:20px;" width="20" height="20" valign="middle"> <a href="https://www.instagram.com/sion_energia/" target="_blank" style="mso-hide:all;"> <img alt="Instagram" title height="20" src="${images.instagram_dark}" style="mso-hide:all;display:block;" width="20"></a>
</td></tr></tbody></table>
</td></tr></tbody></table>
<!--[if mso | IE]>
</td><td>
<![endif]-->
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tbody><tr class="e  ds-1 m" style="mso-hide:all;display:none;height:0;overflow:hidden;"><td style="mso-hide:all;padding:0 16px 0 0;vertical-align:middle;" valign="middle">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-hide:all;width:20px;" width="20"><tbody style="mso-hide:all;"><tr style="mso-hide:all;"><td style="mso-hide:all;font-size:0;height:20px;vertical-align:middle;width:20px;" width="20" height="20" valign="middle"> <a href="https://www.facebook.com/SionEnergia" target="_blank" style="mso-hide:all;"> <img alt="Facebook" title height="20" src="${images.facebook_dark}" style="mso-hide:all;display:block;" width="20"></a>
</td></tr></tbody></table>
</td></tr></tbody></table>
<!--[if mso | IE]>
</td><td>
<![endif]-->
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tbody><tr class="e  ds-1" style="mso-hide:all;display:none;height:0;overflow:hidden;"><td style="mso-hide:all;padding:0;padding-right:0;vertical-align:middle;" valign="middle">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-hide:all;width:20px;" width="20"><tbody style="mso-hide:all;"><tr style="mso-hide:all;"><td style="mso-hide:all;font-size:0;height:20px;vertical-align:middle;width:20px;" width="20" height="20" valign="middle"> <a href="https://www.linkedin.com/company/sion-energia/" target="_blank" style="mso-hide:all;"> <img alt="Linkedin" title height="20" src="${images.linkedin_dark}" style="mso-hide:all;display:block;" width="20"></a>
</td></tr></tbody></table>
</td></tr></tbody></table>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]--></div>
</body>
</html>
`