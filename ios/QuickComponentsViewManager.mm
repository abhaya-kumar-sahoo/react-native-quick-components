#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

@interface QuickComponentsViewManager : RCTViewManager
@end

@implementation QuickComponentsViewManager

RCT_EXPORT_MODULE(QuickComponentsView)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(color, NSString)

@end
