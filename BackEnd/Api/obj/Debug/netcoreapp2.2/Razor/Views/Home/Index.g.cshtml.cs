#pragma checksum "D:\MyProj\Childrens\Childrens\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "789ce8cf955e7d7f2b86f1e11a549b04bb2d4b36"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/Index.cshtml", typeof(AspNetCore.Views_Home_Index))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "D:\MyProj\Childrens\Childrens\Views\Home\Index.cshtml"
using System.Composition;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"789ce8cf955e7d7f2b86f1e11a549b04bb2d4b36", @"/Views/Home/Index.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<Childrens.Models.Item>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(70, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 4 "D:\MyProj\Childrens\Childrens\Views\Home\Index.cshtml"
  
    Layout = "~/Views/Shared/_Layout.cshtml";

#line default
#line hidden
            BeginContext(126, 92, true);
            WriteLiteral("<!DOCTYPE HTML>\r\n\r\n<main class=\"body-height\">\r\n    <section class=\"infosite body-height\" >\r\n");
            EndContext();
#line 11 "D:\MyProj\Childrens\Childrens\Views\Home\Index.cshtml"
         foreach(var item in Model)
        {

#line default
#line hidden
            BeginContext(266, 15, true);
            WriteLiteral("            <p>");
            EndContext();
            BeginContext(282, 9, false);
#line 13 "D:\MyProj\Childrens\Childrens\Views\Home\Index.cshtml"
          Write(item.Name);

#line default
#line hidden
            EndContext();
            BeginContext(291, 6, true);
            WriteLiteral("</p>\r\n");
            EndContext();
#line 14 "D:\MyProj\Childrens\Childrens\Views\Home\Index.cshtml"
        }

#line default
#line hidden
            BeginContext(308, 111, true);
            WriteLiteral("    </section>         \r\n    \r\n    <section class=\"coll-main\">\r\n        <p>Content</p>\r\n    </section>\r\n</main>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<Childrens.Models.Item>> Html { get; private set; }
    }
}
#pragma warning restore 1591
