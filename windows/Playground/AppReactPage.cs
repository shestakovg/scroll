// -----------------------------------------------------------------------
// <copyright file="AppReactPage.cs" company="BlueJeans Network, Inc.">
// Copyright (c) BlueJeans Network, Inc.. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

using BlueJeans.Common.ExtendedScroll;
using ReactNative;
using ReactNative.Modules.Core;
using ReactNative.Shell;
using System.Collections.Generic;

namespace Playground
{
    /// <summary>
    /// Main React app page
    /// </summary>
    internal class AppReactPage : ReactPage
    {
        /// <inheritdoc/>
        public override string MainComponentName
        {
            get
            {
                return "Playground";
            }
        }

        /// <inheritdoc/>
        public override string JavaScriptMainModuleName
        {
            get
            {
               return "windows/Playground/index.windows";
            }
        }

#if BUNDLE
        /// <inheritdoc/>
        public override string JavaScriptBundleFile
        {
          get
           {
             return System.AppDomain.CurrentDomain.BaseDirectory + "ReactAssets/index.windows.bundle";
           }
        }
#endif

        /// <inheritdoc/>
        public override List<IReactPackage> Packages => new List<IReactPackage>
        {
            new MainReactPackage(),
            new BlueJeansExtendedScrollPackage(),
        };

        /// <inheritdoc/>
        public override bool UseDeveloperSupport
        {
            get
            {
#if !BUNDLE || DEBUG
                return true;
#else
                return false;
#endif
            }
        }
    }
}