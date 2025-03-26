package com.quickcomponents

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.QuickComponentsViewManagerInterface
import com.facebook.react.viewmanagers.QuickComponentsViewManagerDelegate

@ReactModule(name = QuickComponentsViewManager.NAME)
class QuickComponentsViewManager : SimpleViewManager<QuickComponentsView>(),
  QuickComponentsViewManagerInterface<QuickComponentsView> {
  private val mDelegate: ViewManagerDelegate<QuickComponentsView>

  init {
    mDelegate = QuickComponentsViewManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<QuickComponentsView>? {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): QuickComponentsView {
    return QuickComponentsView(context)
  }

  @ReactProp(name = "color")
  override fun setColor(view: QuickComponentsView?, color: String?) {
    view?.setBackgroundColor(Color.parseColor(color))
  }

  companion object {
    const val NAME = "QuickComponentsView"
  }
}
