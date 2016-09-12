/**
 * 
 */
package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Java representation of an ace-token as returned from session.getTokens(row).
 *
 */

public class AceToken {
  private final String type;
  private final String value;
  
  public AceToken(String type, String value) {
    this.type = type;
    this.value = value;
  }
  
  public String getType() {
    return this.type;
  }
  
  public String getValue() {
    return this.value;
  }
  
  public static native AceToken fromJavaScript(JavaScriptObject obj) /*-{
    var type = obj.type;
    var value = obj.value;
    var ret = @edu.ycp.cs.dh.acegwt.client.ace.AceToken::new(Ljava/lang/String;Ljava/lang/String;)(type, value);
    return ret;
  }-*/;
}
